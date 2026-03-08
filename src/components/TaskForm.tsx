import { useEffect, useState } from "react";
import { useTaskStore } from "../store/taskStore";
import type { Task } from "../types/task";

export default function TaskForm() {
  const [newTask, setNewTask] = useState<Task>({
    id: "",
    description: "",
    completed: false,
  });
  const {
    state: { editingTask },
    actions: { addTask, clearEditingTask, updateTask },
  } = useTaskStore();

  function handleAddTask() {
    if (!newTask.description.trim()) return;

    const taskToAdd = {
      ...newTask,
      id: crypto.randomUUID(),
    };

    addTask(taskToAdd);
    setNewTask({ id: "", description: "", completed: false });
  }

  useEffect(() => {
    if (editingTask) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setNewTask(editingTask);
    } else {
      setNewTask({ id: "", description: "", completed: false });
    }
  }, [editingTask]);

  return (
    <div className="mt-10 sm:mt-5 w-full border border-zinc-300 rounded-2xl">
      <div className="border-b border-zinc-300 py-10 px-5">
        <h2 className="text-xl font-bold">Nova Tarefa</h2>
      </div>
      <div className="py-10 flex gap-5 flex-row px-5">
        <input
          type="text"
          className="border border-zinc-300 w-full p-2 rounded-xl text-xs sm:text-sm"
          placeholder="Adicionar uma nova tarefa..."
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <button
          disabled={!newTask.description.trim()}
          className={`disabled:opacity-50 p-3 bg-blue-600 font-bold rounded-xl text-zinc-50 hover:bg-blue-500 hover:cursor-pointer`}
          onClick={
            editingTask
              ? () => {
                  updateTask(newTask);
                  clearEditingTask();
                }
              : () => handleAddTask()
          }
        >
          {editingTask ? "Atualizar" : "Adicionar"}
        </button>
      </div>
    </div>
  );
}
