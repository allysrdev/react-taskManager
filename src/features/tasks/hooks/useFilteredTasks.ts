import { useTaskStore } from "../store/taskStore";

export default function useFilteredTasks() {
  const { tasks, filter } = useTaskStore();

  return tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });
}
