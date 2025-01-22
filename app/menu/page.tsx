'use client';

import { useRouter } from 'next/navigation';
import { MenuButton } from './components/MenuButton';
import { CloudBackground, GrassBackground } from '@/sharedComponents/backgrounds';

export default function MenuPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-sky-100 relative overflow-hidden">
      <CloudBackground />
      <GrassBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-md w-[90%]">
          <div className="bg-white/90 px-8 py-4 rounded-xl shadow-md mb-8">
            <h1 className="text-2xl font-bold text-green-700">Sheep Meadow</h1>
          </div>
          
          <div className="flex flex-col space-y-4 w-full">
            <MenuButton 
              onClick={() => router.push('/game')}
              variant="primary"
            >
              Visit test pet
            </MenuButton>
            
            <MenuButton 
              onClick={() => router.push('/settings')}
              variant="secondary"
            >
              Settings
            </MenuButton>
            
            <MenuButton 
              href="/survey"
              variant="survey"
            >
              Survey
            </MenuButton>

            <MenuButton 
              onClick={() => router.push('/login')}
              variant="logout"
            >
              Log Out
            </MenuButton>
          </div>
        </div>
      </div>
    </div>
  );
}