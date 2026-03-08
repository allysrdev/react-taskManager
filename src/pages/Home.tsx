import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";
import TasksView from "../components/TasksView";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <Header />
      <main className="sm:px-20 p-5 flex sm:flex-row flex-col items-start gap-10">
        <div className="w-full">
          <TaskForm />
        </div>
        <div className="w-full">
          <FilterBar />
          <TasksView />
        </div>
      </main>
    </div>
  );
}
