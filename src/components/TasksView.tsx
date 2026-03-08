import { useMemo } from "react";
import { useTaskStore } from "../store/taskStore";
import TaskCard from "./TaskCard";

export default function TasksView() {
  const { tasks, filter } = useTaskStore();

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "all") return true;
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    });
  }, [tasks, filter]);

  return (
    <div className="h-full overflow-y-auto pb-5">
      <div className="flex flex-col gap-5">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
