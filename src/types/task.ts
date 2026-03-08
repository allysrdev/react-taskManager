export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export interface TaskState {
  state: {
    tasks: Task[];
    filter: "all" | "completed" | "pending";
    editingTask: Task | null;
  };
  actions: {
    addTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    updateTask: (updatedTask: Task) => void;
    setFilter: (filter: "all" | "completed" | "pending") => void;
    setEditingTask: (task: Task | null) => void;
    clearEditingTask: () => void;
  };
}
