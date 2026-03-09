export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export type NewTask = Omit<Task, "id">;

export interface TaskState {
  tasks: Task[];
  filter: FilterType;
  editingTask: Task | null;
  addTask: (task: NewTask) => void;
  deleteTask: (id: string) => void;
  updateTask: (updatedTask: Task) => void;
  setFilter: (filter: FilterType) => void;
  setEditingTask: (task: Task | null) => void;
  clearEditingTask: () => void;
}

export type FilterType = "all" | "completed" | "pending";
