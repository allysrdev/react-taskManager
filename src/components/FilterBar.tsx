import { useTaskStore } from "../store/taskStore";

export default function FilterBar() {
  const { filter, setFilter } = useTaskStore();

  return (
    <div className="w-full border sm:border-0 border-zinc-300 rounded-2xl py-5 px-5 flex gap-5 items-center justify-center sm:justify-start">
      <div className="flex">
        <button
          className={`p-3  ${filter === "all" ? "bg-blue-600" : "bg-zinc-500"} font-bold rounded-l-xl text-zinc-50 hover:bg-blue-500 hover:cursor-pointer`}
          onClick={() => setFilter("all")}
        >
          Todas
        </button>

        <button
          className={`p-3  ${filter === "pending" ? "bg-blue-600" : "bg-zinc-500"} font-bold text-zinc-50 hover:bg-blue-500 hover:cursor-pointer`}
          onClick={() => setFilter("pending")}
        >
          Pendentes
        </button>

        <button
          className={`p-3  ${filter === "completed" ? "bg-blue-600" : "bg-zinc-500"} font-bold rounded-r-xl text-zinc-50 hover:bg-blue-500 hover:cursor-pointer`}
          onClick={() => setFilter("completed")}
        >
          Concluídas
        </button>
      </div>
    </div>
  );
}
