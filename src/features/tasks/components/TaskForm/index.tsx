import { useEffect, useRef, useState } from "react";
import { useTaskStore } from "../../store/taskStore";
import type { NewTask, Task } from "../../../../@types/task";
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";
import { useTheme } from "../../../theme/hooks/useTheme";

interface TaskFormProps {
  editingTask?: Task | null;
}

export default function TaskForm({ editingTask }: TaskFormProps) {
  const { addTask, clearEditingTask, updateTask } = useTaskStore();
  const [newTask, setNewTask] = useState<NewTask>(
    editingTask ?? { description: "", completed: false },
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const darkMode = useTheme().darkMode;

  function handleAddTask() {
    if (!newTask.description.trim()) return;

    addTask(newTask);
    setNewTask({ description: "", completed: false });
  }

  useEffect(() => {
    if (editingTask && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingTask]);

  return (
    <form
      className={`sm:mt-5 w-full border border-zinc-300 rounded-sm bg-white ${darkMode ? "dark:bg-zinc-800" : ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        if (editingTask) {
          updateTask({
            ...editingTask,
            description: newTask.description,
          });
          clearEditingTask();
        } else {
          handleAddTask();
        }
      }}
    >
      <div className="border-b border-zinc-300  py-5 px-5">
        <h2 className="text-xl font-bold">
          {editingTask ? "Editar Tarefa" : "Nova Tarefa"}
        </h2>
      </div>
      <div className="py-5 flex gap-5 flex-row px-5">
        <label htmlFor="description" className="sr-only">
          Descrição da tarefa
        </label>
        <Input
          type="text"
          placeholder={`${editingTask ? "Editar" : "Adicionar"} uma nova tarefa...`}
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          id="description"
          aria-invalid={!newTask.description.trim()}
          ref={inputRef}
        />
        <Button
          disabled={!newTask.description.trim()}
          aria-label={editingTask ? "Atualizar tarefa" : "Adicionar tarefa"}
          type="submit"
        >
          {editingTask ? "Atualizar" : "Adicionar"}
        </Button>
      </div>
    </form>
  );
}
