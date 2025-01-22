'use client';

import { ReactNode } from 'react';
import { useGame } from '@/contexts/GameContext';

interface PetContainerProps {
  children: ReactNode;
}

export function PetContainer({ children }: PetContainerProps) {
  const { isAdult } = useGame();

  return (
    <div className="flex-1 flex items-end justify-center relative">
      <div 
        className={`
          relative transition-all duration-500 ease-in-out
          ${isAdult ? 'scale-125 mb-16' : 'scale-100 mb-8'}
        `}
      >
        {children}
      </div>
    </div>
  );
} 