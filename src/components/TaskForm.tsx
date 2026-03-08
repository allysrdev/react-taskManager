import { useState } from "react";
import { useTaskStore } from "../store/taskStore";
import type { Task } from "../types/task";

export default function TaskForm({
  editingTask,
}: {
  editingTask?: Task | null;
}) {
  const { addTask, clearEditingTask, updateTask } = useTaskStore();
  const [newTask, setNewTask] = useState<Task>(
    editingTask ?? { id: null, description: "", completed: false },
  );

  function handleAddTask() {
    if (!newTask.description.trim()) return;

    addTask(newTask);
    setNewTask({ id: "", description: "", completed: false });
  }

  return (
    <form
      className="mt-10 sm:mt-5 w-full border border-zinc-300 rounded-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        if (editingTask) {
          updateTask(newTask);
          clearEditingTask();
        } else {
          handleAddTask();
        }
      }}
    >
      <div className="border-b border-zinc-300 py-10 px-5">
        <h2 className="text-xl font-bold">Nova Tarefa</h2>
      </div>
      <div className="py-10 flex gap-5 flex-row px-5">
        <label htmlFor="description" className="sr-only">
          Descrição da tarefa
        </label>
        <input
          type="text"
          className="border border-zinc-300 w-full p-2 rounded-xl text-xs sm:text-sm"
          placeholder="Adicionar uma nova tarefa..."
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          id="description"
          aria-invalid={!newTask.description.trim()}
        />
        <button
          disabled={!newTask.description.trim()}
          className={`disabled:opacity-50 p-3 bg-blue-600 font-bold rounded-xl text-zinc-50 hover:bg-blue-500 hover:cursor-pointer`}
          aria-label={editingTask ? "Atualizar tarefa" : "Adicionar tarefa"}
          type="submit"
        >
          {editingTask ? "Atualizar" : "Adicionar"}
        </button>
      </div>
    </form>
  );
}
