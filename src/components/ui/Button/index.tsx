import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export default function Button({ className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`disabled:opacity-50 p-3 bg-blue-600 font-bold rounded-xl text-zinc-50 hover:bg-blue-500 hover:cursor-pointer ${className}`}
      {...props}
    />
  );
}
