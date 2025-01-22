interface InfoModalProps {
    title: string;
    onClose: () => void;
    children: React.ReactNode;
  }
  
  export function InfoModal({ title, onClose, children }: InfoModalProps) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {title}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="space-y-4 text-gray-600">
            {children}
          </div>
        </div>
      </div>
    );
  }