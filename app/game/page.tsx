'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CloudBackground, GrassBackground } from '@/sharedComponents/backgrounds';
import { InfoModal } from '@/sharedComponents/modals/InfoModal';
import { PetContainer } from '@/sharedComponents/animations/PetContainer';
import { PetAnimation } from '@/sharedComponents/animations/PetAnimation';
import { useGame } from '@/contexts/GameContext';

function StatMeter({ label, value, isDead, type }: {
  label: string;
  value: number;
  isDead: boolean;
  type: 'hunger' | 'happiness' | 'health';
}) {
  const getBarColor = (value: number) => {
    if (value > 90) return 'bg-green-500';
    if (value > 50) return 'bg-yellow-500';
    if (value > 20) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white/90 rounded-xl p-3 shadow-md">
      <div className="text-sm font-medium text-gray-600 mb-1">{label}</div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${isDead ? 'bg-gray-300' : getBarColor(value)}`}
          style={{ width: `${isDead ? 0 : value}%` }}
        />
      </div>
      <div className="text-xs text-right mt-1 text-gray-500">
        {isDead ? '0' : Math.round(value)}%
      </div>
    </div>
  );
}

function AgeDisplay({ age }: { age: { days: number; hours: number; minutes: number } }) {
  return (
    <div className="bg-white/90 rounded-xl p-3 shadow-md">
      <div className="text-sm font-medium text-gray-600 mb-1">Age</div>
      <div className="text-xs text-gray-500">
        {age.days}d {age.hours}h {age.minutes}m
      </div>
    </div>
  );
}

const GameInfoContent = () => (
  <>
    <p>
      Your sheep's well-being is represented by stats in three categories: Hungry, Happiness, and Health.
    </p>
    {/* ... rest of the info content ... */}
  </>
);

export default function GamePage() {
  const router = useRouter();
  const [showInfoModal, setShowInfoModal] = useState(false);
  const { petType, petName, stats } = useGame();
  
  // Redirect to choose-pet if no pet is selected
  useEffect(() => {
    if (!petType || !petName) {
      router.push('/choose-pet');
    }
  }, [petType, petName, router]);

  if (!petType || !petName) {
    return null; // Don't render anything while redirecting
  }

  const { age, hunger, happiness, health, isDead } = stats;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-sky-100 relative overflow-hidden">
      <CloudBackground />
      <GrassBackground />

      <div className="relative z-10 h-screen flex flex-col">
        <div className="p-4 flex justify-between items-center">
          <button 
            onClick={() => router.push('/menu')}
            className="bg-white/90 px-4 py-2 rounded-xl shadow-md hover:bg-white transition-colors text-gray-600"
          >
            Back to Menu
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 bg-white/90 px-6 py-2 rounded-xl shadow-md">
            <h1 className="text-lg font-semibold text-gray-600">
              {petName}'s Home
            </h1>
          </div>
          
          <div 
            onClick={() => setShowInfoModal(true)}
            className="absolute left-[calc(50%+120px)] bg-white/90 w-8 h-8 rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
          >
            <span className="text-gray-600 text-lg">ⓘ</span>
          </div>
        </div>

        <div className="flex-1 flex">
          <div className="w-64 p-4 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <AgeDisplay age={age} />
              <StatMeter label="Hunger" value={hunger} isDead={isDead} type="hunger" />
              <StatMeter label="Happiness" value={happiness} isDead={isDead} type="happiness" />
              <StatMeter label="Health" value={health} isDead={isDead} type="health" />
            </div>

            <div className="space-y-3">
              <button
                className="w-full py-3 px-6 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md border-b-4 border-green-600 hover:border-green-700"
                disabled={isDead}
              >
                Feed
              </button>
              <button
                className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md border-b-4 border-yellow-600 hover:border-yellow-700"
                disabled={isDead}
              >
                Play
              </button>
              <button
                className="w-full py-3 px-6 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md border-b-4 border-red-600 hover:border-red-700"
                disabled={isDead}
              >
                Heal
              </button>
            </div>
          </div>

          <div className="flex-1">
            <PetContainer>
              <PetAnimation />
            </PetContainer>
          </div>

          <div className="w-64" />
        </div>
      </div>

      {showInfoModal && (
        <InfoModal 
          title="Caring For Your Sheep"
          onClose={() => setShowInfoModal(false)}
        >
          <GameInfoContent />
        </InfoModal>
      )}
    </div>
  );
}