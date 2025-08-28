import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: "filled" | "outlined";
}

function Input({ variant, className = "", ...props }: InputProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <input
        type="text"
        {...props}
        className={`border ${
          variant === "filled"
            ? "border-transparent bg-white/5 hover:bg-white/10 focus:bg-white/10"
            : "border-white/30 hover:border-white/50"
        } outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 h-12 w-full rounded-lg p-2 transition-colors duration-200 placeholder:text-white/40 text-white ${className}`}
      />
    </div>
  );
}

export default Input;
