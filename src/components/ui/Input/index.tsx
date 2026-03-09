import { type InputHTMLAttributes, forwardRef } from "react";
import { useTheme } from "../../../features/theme/hooks/useTheme";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

// Usando forwardRef para permitir passar ref como no input normal
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    const darkMode = useTheme().darkMode;
    return (
      <input
        className={`border border-zinc-300 w-full p-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${darkMode ? "dark:text-white" : ""} ${className}`}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
