'use client';

interface StatMeterProps {
  label: string;
  value: number;
  isDead: boolean;
  type: 'hunger' | 'happiness' | 'health';
}

export function StatMeter({ label, value, isDead, type }: StatMeterProps) {
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