import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-black text-white font-medium hover:bg-gray-800';
      case 'secondary':
        return 'border border-gray-300 bg-transparent text-black font-medium hover:bg-gray-50';
      case 'ghost':
        return 'text-black font-semibold hover:text-gray-600';
      case 'icon':
        return 'bg-black hover:bg-gray-800 text-white flex items-center justify-center';
      default:
        return 'bg-black text-white font-medium hover:bg-gray-800';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-2';
      case 'lg':
        return 'px-8 py-3';
      default:
        return 'px-6 py-2';
    }
  };

  const baseClasses = 'rounded-full transition-colors';
  const variantClasses = getVariantClasses();
  const sizeClasses = getSizeClasses();

  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer ${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
};