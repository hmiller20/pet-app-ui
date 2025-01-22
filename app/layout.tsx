import type { Metadata } from 'next';
import { GameProvider } from '@/contexts/GameContext';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Virtual Pet App',
  description: 'A virtual pet application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  );
}