export const DeathModal = ({ petName, onReset }: { petName: string, onReset: () => void }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 text-center shadow-xl">
        <p className="text-2xl mb-6 text-gray-800">
          {petName} has passed away.
        </p>
        <button 
          onClick={onReset}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          Choose New Pet
        </button>
      </div>
    </div>
  );