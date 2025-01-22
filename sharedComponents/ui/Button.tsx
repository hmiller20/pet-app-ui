interface ButtonProps {
    onClick?: () => void;
    href?: string;
    variant: 'primary' | 'secondary' | 'danger' | 'info';
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
  }
  
  export function Button({ 
    onClick, 
    href, 
    variant, 
    disabled, 
    children, 
    className 
  }: ButtonProps) {
    const baseStyles = "py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md";
    
    const variantStyles = {
      primary: "bg-green-500 hover:bg-green-600 text-white border-b-4 border-green-600",
      secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800 border-2 border-gray-200",
      danger: "bg-red-500 hover:bg-red-600 text-white border-b-4 border-red-600",
      info: "bg-sky-500 hover:bg-sky-600 text-white border-b-4 border-sky-600"
    };
  
    const disabledStyles = "disabled:bg-gray-300 disabled:border-gray-400 disabled:cursor-not-allowed";
  
    if (href) {
      return (
        <Link 
          href={href} 
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          {children}
        </Link>
      );
    }
  
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`}
      >
        {children}
      </button>
    );
  }