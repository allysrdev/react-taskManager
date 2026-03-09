import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TaskState } from "../../../@types/task";

export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],
      filter: "all",
      editingTask: null,
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, { ...task, id: crypto.randomUUID() }],
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
          editingTask: state.editingTask?.id === id ? null : state.editingTask,
        })),
      updateTask: (updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === updatedTask.id ? { ...task, ...updatedTask } : task,
          ),
        })),
      setFilter: (filter) => set({ filter }),
      setEditingTask: (task) => set({ editingTask: task }),
      clearEditingTask: () => set({ editingTask: null }),
    }),
    {
      name: "task-storage",
      partialize: (state) => ({
        tasks: state.tasks,
      }),
    },
  ),
);
