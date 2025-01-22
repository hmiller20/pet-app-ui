'use client';

interface AgeDisplayProps {
  age: {
    days: number;
    hours: number;
    minutes: number;
  };
}

export function AgeDisplay({ age }: AgeDisplayProps) {
  return (
    <div className="bg-white/90 rounded-xl p-3 shadow-md">
      <div className="text-sm font-medium text-gray-600 mb-1">Age</div>
      <div className="text-xs text-gray-500">
        {age.days}d {age.hours}h {age.minutes}m
      </div>
    </div>
  );
}