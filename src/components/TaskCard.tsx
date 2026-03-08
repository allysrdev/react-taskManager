import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import { useTaskStore } from "../store/taskStore";
import type { Task } from "../types/task";
import { useState } from "react";

export default function TaskCard({ task }: { task: Task }) {
  const { deleteTask, updateTask, setEditingTask } = useTaskStore();
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

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
    <div className="w-full border border-zinc-300 rounded-sm bg-white p-5 flex items-center justify-between">
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Confirmar exclusão</h2>

            <p className="text-sm text-gray-600 mb-6">
              Tem certeza que deseja excluir esta tarefa?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 rounded-lg border cursor-pointer"
              >
                Cancelar
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-lg bg-red-500 text-white cursor-pointer"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
