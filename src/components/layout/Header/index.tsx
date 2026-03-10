import { CheckSquareIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "../../../features/theme/hooks/useTheme";
import { getBgColor } from "../../../features/theme/utils/getBgColor";

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <header className="sm:px-20 w-full p-6 border-b border-zinc-300 flex justify-between">
      <div className="flex items-center">
        <CheckSquareIcon
          className={`text-3xl ${getBgColor(darkMode, "text-[#465268]", "text-zinc-300")}`}
        />
        <h1
          className={`text-2xl font-bold ${getBgColor(darkMode, "text-[#465268]", "text-zinc-300")}`}
        >
          Task Manager
        </h1>
      </div>
      <button
        className={`flex items-center justify-center w-9 cursor-pointer   ${getBgColor(darkMode, "bg-[#545f73]", "bg-[#d4d4d8]")} hover:opacity-80 rounded-full`}
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <SunIcon className="text-3xl text-[#18181b]" />
        ) : (
          <MoonIcon className="text-3xl text-zinc-50" />
        )}
      </button>
    </header>
  );
}
