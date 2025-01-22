'use client';

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useGame } from "@/contexts/GameContext";
import { usePathname } from 'next/navigation';
import { ANIMATIONS } from './animations.data';

type EmotionalState = 'happy' | 'neutral' | 'sad' | 'sick';

interface AnimationProps {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: unknown[];
  layers: unknown[];
}

export function PetAnimation() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const pathname = usePathname();
  const { petType, isAdult, hunger, happiness, health } = useGame();

  const getEmotionalState = (
    hunger: number,
    happiness: number,
    health: number
  ): EmotionalState => {
    if (health < 50) return 'sick';
    if (hunger >= 90 && happiness >= 90 && health >= 90) return 'happy';
    if (hunger < 50 || happiness < 50) return 'sad';
    return 'neutral';
  };

  useEffect(() => {
    if (!petType) return;

    const baseType = petType.replace('Baby', '').replace('Adult', '');
    const ageType = isAdult ? 'Adult' : 'Baby';
    const fullPetType = `${baseType}${ageType}`;
    const emotionalState = getEmotionalState(hunger, happiness, health);
    const animationData = ANIMATIONS[fullPetType]?.[emotionalState] as AnimationProps | undefined;

    if (animationData) {
      const requiredProps = ['v', 'fr', 'ip', 'op', 'w', 'h', 'nm', 'ddd', 'assets', 'layers'];
      const missingProps = requiredProps.filter(prop => !(prop in animationData));
      
      if (missingProps.length > 0) {
        setError(`Invalid animation format: missing ${missingProps.join(', ')}`);
      } else {
        setError(null);
      }
    } else {
      setError(`No animation found for ${fullPetType} in ${emotionalState} state`);
    }
  }, [petType, isAdult, hunger, happiness, health]);

  if (pathname === '/login' || !user || pathname === '/choose-pet') {
    return null;
  }

  if (error || !petType) {
    return (
      <div className="pet-display">
        <div className="pet-sprite">🐑</div>
        {error && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            Animation Error: {error}
          </div>
        )}
      </div>
    );
  }

  const baseType = petType.replace('Baby', '').replace('Adult', '');
  const ageType = isAdult ? 'Adult' : 'Baby';
  const fullPetType = `${baseType}${ageType}`;
  const emotionalState = getEmotionalState(hunger, happiness, health);
  const animationData = ANIMATIONS[fullPetType]?.[emotionalState];

  return (
    <div className="pet-display">
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        onError={(e) => setError(`Lottie error: ${e instanceof Error ? e.message : 'Unknown error'}`)}
        style={{
          width: '500px',
          height: '400px',
          margin: 'auto',
          display: 'block',
        }}
      />
    </div>
  );
}