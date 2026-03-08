import { CheckSquareIcon, MoonIcon } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="sm:px-20 w-full p-6 border-b border-zinc-300 flex justify-between">
      <div className="flex items-center">
        <CheckSquareIcon className="text-3xl text-[#465268]" />
        <h1 className="text-2xl font-bold">Task Manager</h1>
      </div>
      <button className="flex items-center justify-center w-9 bg-[#465268] hover:bg-zinc-200 rounded-full">
        <MoonIcon className="text-3xl text-zinc-50" />
      </button>
    </header>
  );
}
