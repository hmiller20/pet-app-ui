'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGame } from '@/contexts/GameContext';

export default function NamePetPage() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { petType, setPetName } = useGame();

  // Redirect to choose-pet if no pet type is selected
  useEffect(() => {
    if (!petType) {
      router.push('/choose-pet');
    }
  }, [petType, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name.trim()) {
      setError('Please enter a name');
      return;
    }
    
    if (name.length > 20) {
      setError('Name must be 20 characters or less');
      return;
    }
    
    setPetName(name.trim());
    router.push('/game');
  };

  if (!petType) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
          Name Your Sheep
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="petName" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              What would you like to name your sheep?
            </label>
            
            <input
              type="text"
              id="petName"
              value={name}
              onChange={(e) => {
                setError('');
                setName(e.target.value);
              }}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
              placeholder="Enter name..."
            />
            
            {error && (
              <p className="mt-2 text-sm text-red-600">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            Confirm Name
          </button>
        </form>
      </div>
    </div>
  );
}