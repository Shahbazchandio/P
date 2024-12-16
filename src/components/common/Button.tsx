import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
}

const Button = ({ variant = 'primary', children, icon: Icon, onClick }: ButtonProps) => {
  const baseStyles = "flex items-center space-x-2 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105";
  const variants = {
    primary: "bg-red-500 hover:bg-red-600 text-white",
    secondary: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;