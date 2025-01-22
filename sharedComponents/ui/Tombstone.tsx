export const Tombstone = ({ petName }: { petName: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-48 h-56 relative flex items-center justify-center">
        {/* Tombstone shape */}
        <div className="absolute inset-0 bg-gray-300 rounded-t-3xl" />
        
        {/* Engraved text */}
        <div className="relative text-center text-gray-600">
          <div className="text-2xl font-serif mb-2">RIP</div>
          <div className="text-xl font-serif">{petName}</div>
        </div>
        
        {/* Base of tombstone */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-8 bg-gray-400 rounded-t-lg" />
      </div>
    </div>
  );