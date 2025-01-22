'use client';

import { useMemo } from 'react';

interface CloudProps {
  className?: string;
  index?: number;
}

export function Cloud({ className = "", index = 0 }: CloudProps) {
  const cloudStyle = useMemo(() => {
    const baseWidth = 'min(120px, 15vw)';
    const baseHeight = 'min(60px, 7.5vw)';
    const verticalPositions = [4, 8, 12, 20, 28].map(v => `${v}vh`);
    const randomOffset = Math.random() * 4;
    const verticalPosition = `calc(${verticalPositions[index]} + ${randomOffset}vh)`;
    
    return {
      width: baseWidth,
      height: baseHeight,
      top: verticalPosition,
    };
  }, [index]);

  const bumpStyles = useMemo(() => {
    return [...Array(3)].map((_, i) => ({
      width: `${30 + Math.random() * 40}%`,
      height: `${80 + Math.random() * 40}%`,
      left: `${10 + (i * 25) + (Math.random() * 10)}%`,
      top: `${-(80 + Math.random() * 40)/2}%`,
    }));
  }, []);

  return (
    <div 
      className={`absolute bg-white rounded-full ${className}`}
      style={cloudStyle}
    >
      {bumpStyles.map((style, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={style}
        />
      ))}
    </div>
  );
}