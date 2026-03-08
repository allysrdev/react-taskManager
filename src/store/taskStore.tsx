import { create } from "zustand";
import type { TaskState } from "../types/task";

export const useTaskStore = create<TaskState>((set) => ({
  state: {
    tasks: [],
    filter: "all",
    editingTask: null,
  },
  actions: {
    addTask: (task) =>
      set((state) => ({
        state: { ...state.state, tasks: [...state.state.tasks, task] },
      })),
    deleteTask: (id) =>
      set((state) => ({
        state: {
          ...state.state,
          tasks: state.state.tasks.filter((task) => task.id !== id),
        },
      })),
    updateTask: (updatedTask) =>
      set((state) => ({
        state: {
          ...state.state,
          tasks: state.state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task,
          ),
        },
      })),
    setFilter: (filter) =>
      set((state) => ({
        state: { ...state.state, filter },
      })),
    setEditingTask: (task) =>
      set((state) => ({
        state: { ...state.state, editingTask: task },
      })),
    clearEditingTask: () =>
      set((state) => ({
        state: { ...state.state, editingTask: null },
      })),
  },
}));
