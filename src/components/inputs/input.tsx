import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: "filled" | "outlined";
}

function Input({ variant, ...props }: InputProps) {
  return (
    <div className="w-full flex items-center justify-center">
      <input
        type="text"
        {...props}
        className={`border ${
          variant === "filled"
            ? "border-transparent bg-thin-border-70"
            : "border-white/30"
        } outline-none focus:border-outline h-12 active:border-outline w-full rounded-md p-2`}
      />
    </div>
  );
}

export default Input;
