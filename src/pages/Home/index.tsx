import Header from "../../components/layout/Header";
import TasksFilter from "../../features/tasks/components/TasksFilter";
import TasksView from "../../features/tasks/components/TasksView";
import { useTaskStore } from "../../features/tasks/store/taskStore";
import TaskForm from "../../features/tasks/components/TaskForm/index";

export default function Home() {
  const { editingTask } = useTaskStore();

  return (
    <div className="h-screen bg-zinc-100 flex flex-col">
      <Header />

      <main className="flex-1 min-h-0 sm:px-20 p-5 flex sm:flex-row flex-col gap-5">
        <div className="w-full">
          <TaskForm
            key={editingTask ? editingTask.id : "new"}
            editingTask={editingTask}
          />
        </div>

        <div className="w-full bg-zinc-300 h-[0.5px] sm:hidden" />

        <div className="w-full flex flex-col gap-3 min-h-0">
          <TasksFilter />

          <div className="flex items-center gap-2">
            <div className="w-5 bg-zinc-300 h-[0.5px]" />
            <h5 className="text-center font-bold">Lista de tarefas</h5>
            <div className="flex-1 bg-zinc-300 h-[0.5px]" />
          </div>

          <TasksView />
        </div>
      </main>
    </div>
  );
}
