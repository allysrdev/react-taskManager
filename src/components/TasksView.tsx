import { useTaskStore } from "../store/taskStore";
import TaskCard from "./TaskCard";

export default function TasksView() {
  const {
    state: { tasks, filter },
  } = useTaskStore();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="mt-10 w-full">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-5 bg-zinc-300 h-[0.5px]" />
        <h5 className="text-center font-bold">Lista de tarefas</h5>
        <div className="flex-1 bg-zinc-300 h-[0.5px]" />
      </div>
      <div className="flex flex-col gap-5">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
