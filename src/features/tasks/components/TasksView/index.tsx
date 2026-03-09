import TaskCard from "../TaskCard";
import useFilteredTasks from "../../hooks/useFilteredTasks";

export default function TasksView() {
  const tasks = useFilteredTasks();

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-zinc-400">
        <p className="text-sm">Nenhuma tarefa encontrada.</p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto pb-5">
      <div className="flex flex-col gap-5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
