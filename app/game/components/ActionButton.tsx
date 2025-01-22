interface ActionButtonProps {
    onClick: () => void;
    disabled: boolean;
    variant: 'feed' | 'play' | 'heal';
    children: React.ReactNode;
  }
  
  export function ActionButton({ onClick, disabled, variant, children }: ActionButtonProps) {
    const variantStyles = {
      feed: "bg-green-500 hover:bg-green-600 border-green-600 hover:border-green-700",
      play: "bg-yellow-500 hover:bg-yellow-600 border-yellow-600 hover:border-yellow-700",
      heal: "bg-red-500 hover:bg-red-600 border-red-600 hover:border-red-700"
    };
  
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full py-3 px-6 ${variantStyles[variant]} disabled:bg-gray-300 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md border-b-4 disabled:border-gray-400`}
      >
        {children}
      </button>
    );
  }