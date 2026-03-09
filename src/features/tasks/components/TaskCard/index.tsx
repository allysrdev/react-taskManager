import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import { useTaskStore } from "../../store/taskStore";
import type { Task } from "../../../../@types/task";
import { useState } from "react";
import ConfirmDialog from "../../../../components/ui/ConfirmDialog";
import { useTheme } from "../../../theme/hooks/useTheme";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const { deleteTask, updateTask, setEditingTask } = useTaskStore();
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);
  const darkMode = useTheme().darkMode;

  const handleUpdateTaskStatus = () => {
    updateTask({
      ...task,
      completed: !task.completed,
    });
  };

  function handleRequestDelete(taskId: string) {
    setTaskToDelete(taskId);
  }

  function confirmDelete() {
    if (taskToDelete) {
      deleteTask(taskToDelete);
      setTaskToDelete(null);
    }
  }

  function cancelDelete() {
    setTaskToDelete(null);
  }

  return (
    <div
      className={`w-full border border-zinc-300 rounded-sm bg-white p-5 flex items-center justify-between ${darkMode ? "dark:bg-zinc-800" : ""}`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3"
          checked={task.completed}
          onChange={() => {
            handleUpdateTaskStatus();
          }}
          aria-label={`Marcar tarefa "${task.description}" como ${task.completed ? "pendente" : "concluída"}`}
        />
        <p className="text-sm">{task.description}</p>
      </div>
      <div className="flex">
        {task.completed ? (
          <span className="text-zinc-50 font-bold text-sm p-1 bg-zinc-500 rounded-sm">
            Concluída
          </span>
        ) : null}
        <div className="flex w-full">
          <button
            className="ml-5 text-blue-500 hover:text-blue-700 hover:cursor-pointer"
            onClick={() => setEditingTask(task)}
            aria-label={`Editar tarefa "${task.description}"`}
          >
            <PencilIcon />
          </button>
          <button
            className="ml-5 text-red-500 hover:text-red-700 hover:cursor-pointer"
            onClick={() => handleRequestDelete(task.id!)}
            aria-label={`Excluir tarefa "${task.description}"`}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
      {taskToDelete && (
        <ConfirmDialog
          title="Excluir tarefa"
          description={`Tem certeza que deseja excluir a tarefa "${task.description}"?`}
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
        />
      )}
    </div>
  );
}
