import { describe, it, expect, beforeEach } from "vitest";
import { useTaskStore } from "./taskStore";

describe("taskStore", () => {
  // Limpa o estado da store antes de cada teste
  beforeEach(() => {
    useTaskStore.setState({
      tasks: [],
      filter: "all",
      editingTask: null,
    });
  });

  it("Deve adicionar uma tarefa", () => {
    const { addTask } = useTaskStore.getState();
    const newTask = { id: "1", description: "Test Task", completed: false };
    addTask(newTask);
    const state = useTaskStore.getState();
    expect(state.tasks).toHaveLength(1);
    expect(state.tasks[0].description).toBe("Test Task");
  });

  it("Deve deletar uma tarefa pelo ID", () => {
    const { addTask, deleteTask } = useTaskStore.getState();
    const newTask = { id: "1", description: "Test Task", completed: false };
    addTask(newTask);

    const taskId = useTaskStore.getState().tasks[0].id;
    deleteTask(taskId!);
    expect(useTaskStore.getState().tasks).toHaveLength(0);
  });

  it("Deve atualizar uma tarefa", () => {
    const { addTask, updateTask } = useTaskStore.getState();
    const newTask = { id: "0", description: "Test Task", completed: false };
    addTask(newTask);
    const taskId = useTaskStore.getState().tasks[0].id!;
    const updatedTask = {
      id: taskId,
      description: "Updated Task",
      completed: true,
    };
    updateTask(updatedTask);
    expect(useTaskStore.getState().tasks[0].description).toBe("Updated Task");
    expect(useTaskStore.getState().tasks[0].completed).toBe(true);
  });

  it("Deve definir o filtro corretamente", () => {
    const { setFilter } = useTaskStore.getState();
    setFilter("completed");
    expect(useTaskStore.getState().filter).toBe("completed");
  });
});
