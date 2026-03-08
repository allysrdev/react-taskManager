import { useTaskStore } from "../store/taskStore";
import type { Task } from "../types/task";

export default function TaskCard({ task }: { task: Task }) {
  const {
    actions: { deleteTask, updateTask, setEditingTask },
  } = useTaskStore();

  const handleUpdateTaskStatus = () => {
    updateTask({
      ...task,
      completed: !task.completed,
    });
  };

  return (
    <div className="w-full border border-zinc-300 rounded-sm bg-white p-5 flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3"
          checked={task.completed}
          onChange={() => {
            handleUpdateTaskStatus();
          }}
        />
        <p className="text-sm">{task.description}</p>
      </div>
      <div>
        {task.completed ? (
          <span className="text-zinc-50 font-bold text-sm p-1 bg-zinc-500 rounded-sm">
            Concluída
          </span>
        ) : null}
        <button
          className="ml-5 text-blue-500 hover:text-blue-700 hover:cursor-pointer"
          onClick={() => setEditingTask(task)}
        >
          Editar
        </button>
        <button
          className="ml-5 text-red-500 hover:text-red-700 hover:cursor-pointer"
          onClick={() => deleteTask(task.id)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
