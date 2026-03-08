import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { TaskState } from "../types/task";

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
        })),
      updateTask: (updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task,
          ),
        })),
      setFilter: (filter) =>
        set((state) => ({
          ...state,
          filter,
        })),
      setEditingTask: (task) =>
        set((state) => ({
          ...state,
          editingTask: task,
        })),
      clearEditingTask: () =>
        set((state) => ({
          ...state,
          editingTask: null,
        })),
    }),
    {
      name: "task-storage",
      partialize: (state) => ({
        tasks: state.tasks,
        filter: state.filter,
      }),
    },
  ),
);
