'use client';

interface PetContainerProps {
  isAdult: boolean;
  children: React.ReactNode;
}

export function PetContainer({ isAdult, children }: PetContainerProps) {
  return (
    <div 
      className="absolute bottom-0"
      style={{
        left: '50%',
        transform: `translate(-50%, ${isAdult ? 'calc(-3vh)' : 'calc(0.5vh)'})`
      }}
    >
      {children}
    </div>
  );
}