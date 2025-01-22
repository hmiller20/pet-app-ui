import Link from 'next/link';

interface MenuButtonProps {
    onClick?: () => void;
    href?: string;
    variant: 'primary' | 'secondary' | 'survey' | 'logout';
    children: React.ReactNode;
  }
  
  export function MenuButton({ onClick, href, variant, children }: MenuButtonProps) {
    const baseStyles = "w-full py-4 px-6 rounded-2xl font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md";
    
    const variantStyles = {
      primary: "bg-green-500 hover:bg-green-600 text-white border-b-4 border-green-600 hover:border-green-700",
      secondary: "bg-green-100 hover:bg-green-200 text-green-700 border-2 border-green-200 hover:border-green-300",
      survey: "bg-yellow-500 hover:bg-yellow-600 text-white border-b-4 border-yellow-600 hover:border-yellow-700",
      logout: "bg-sky-100 hover:bg-sky-200 text-sky-700 border-2 border-sky-200 hover:border-sky-300"
    };
  
    if (href) {
      return (
        <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
          <div className="text-center">{children}</div>
        </Link>
      );
    }
  
    return (
      <button 
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]}`}
      >
        {children}
      </button>
    );
  }