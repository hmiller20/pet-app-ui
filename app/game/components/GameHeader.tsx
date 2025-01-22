interface GameHeaderProps {
    petName: string;
    onBackClick: () => void;
    onInfoClick: () => void;
  }
  
  export function GameHeader({ petName, onBackClick, onInfoClick }: GameHeaderProps) {
    return (
      <div className="p-4 flex justify-between items-center">
        <button 
          onClick={onBackClick}
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
          onClick={onInfoClick}
          className="absolute left-[calc(50%+120px)] bg-white/90 w-8 h-8 rounded-full shadow-md flex items-center justify-center cursor-pointer hover:bg-white transition-colors"
        >
          <span className="text-gray-600 text-lg">ⓘ</span>
        </div>
      </div>
    );
  }