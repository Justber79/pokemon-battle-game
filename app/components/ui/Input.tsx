"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, className = "", ...props }: InputProps) => (
  <div className="flex flex-col gap-1.5 w-full">
    {label && <label className="text-[10px] font-black uppercase text-slate-500 ml-1">{label}</label>}
    <input 
      className={`bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/50 outline-none transition-all ${error ? "border-red-500" : ""} ${className}`}
      {...props}
    />
    {error && <span className="text-[10px] font-bold text-red-500 ml-1">{error}</span>}
  </div>
);
