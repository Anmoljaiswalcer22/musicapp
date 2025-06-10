// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      
      className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
    >
      {children}
    </button>
  );
};
