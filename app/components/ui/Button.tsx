"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "outline";
  isLoading?: boolean;
}

export const Button = ({ children, variant = "primary", isLoading, className = "", ...props }: ButtonProps) => {
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20",
    danger: "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/20",
    outline: "border border-white/20 hover:bg-white/10 text-white",
  };

  return (
    <button 
      className={`px-6 py-2 rounded-xl font-bold uppercase tracking-widest text-xs transition-all active:scale-95 disabled:opacity-50 ${styles[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};
