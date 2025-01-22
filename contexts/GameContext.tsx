// this is needed to manage pet state. this is a relatively complicated app.
// we don't know if the animations are rendering properly on the game 
// page without adding some data persistence.

'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface PetStats {
  hunger: number;
  happiness: number;
  health: number;
  age: {
    days: number;
    hours: number;
    minutes: number;
  };
  isDead: boolean;
}

interface GameContextType {
  petType: string | null;
  petName: string | null;
  isAdult: boolean;
  stats: PetStats;
  setPetType: (type: string) => void;
  setPetName: (name: string) => void;
  resetGame: () => void;
}

const DEFAULT_STATS: PetStats = {
  hunger: 100,
  happiness: 100,
  health: 100,
  age: { days: 0, hours: 0, minutes: 0 },
  isDead: false
};

const GameContext = createContext<GameContextType>({
  petType: null,
  petName: null,
  isAdult: false,
  stats: DEFAULT_STATS,
  setPetType: () => {},
  setPetName: () => {},
  resetGame: () => {}
});

export function GameProvider({ children }: { children: ReactNode }) {
  const [petType, setPetType] = useState<string | null>(null);
  const [petName, setPetName] = useState<string | null>(null);
  const [isAdult, setIsAdult] = useState(false);
  const [stats, setStats] = useState<PetStats>(DEFAULT_STATS);

  // Load saved game state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
      const { petType, petName, isAdult, stats } = JSON.parse(savedState);
      setPetType(petType);
      setPetName(petName);
      setIsAdult(isAdult);
      setStats(stats);
    }
  }, []);

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    if (petType && petName) {
      localStorage.setItem('gameState', JSON.stringify({
        petType,
        petName,
        isAdult,
        stats
      }));
    }
  }, [petType, petName, isAdult, stats]);

  const resetGame = () => {
    setPetType(null);
    setPetName(null);
    setIsAdult(false);
    setStats(DEFAULT_STATS);
    localStorage.removeItem('gameState');
  };

  return (
    <GameContext.Provider value={{
      petType,
      petName,
      isAdult,
      stats,
      setPetType,
      setPetName,
      resetGame
    }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);