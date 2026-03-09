import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import TaskForm from ".";

const mockAddTask = vi.fn();
const mockUpdateTask = vi.fn();
const mockClearEditingTask = vi.fn();

vi.mock("../../store/taskStore", () => ({
  useTaskStore: () => ({
    addTask: mockAddTask,
    updateTask: mockUpdateTask,
    clearEditingTask: mockClearEditingTask,
  }),
}));

describe("TaskForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Deve renderizar o formulário para adicionar tarefa", () => {
    render(<TaskForm />);

    expect(screen.getByText("Nova Tarefa")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /adicionar tarefa/i }),
    ).toBeInTheDocument();
  });

  it("Deve adicionar uma tarefa ao enviar o formulário", async () => {
    const user = userEvent.setup();

    render(<TaskForm />);

    const input = screen.getByPlaceholderText(/adicionar uma nova tarefa/i);
    const button = screen.getByRole("button", { name: /adicionar tarefa/i });

    await user.type(input, "Estudar React");
    await user.click(button);

    expect(mockAddTask).toHaveBeenCalledWith({
      description: "Estudar React",
      completed: false,
    });
  });

  it("Não deve adicionar tarefa se a descrição estiver vazia", async () => {
    const user = userEvent.setup();

    render(<TaskForm />);

    const button = screen.getByRole("button", { name: /adicionar tarefa/i });

    await user.click(button);

    expect(mockAddTask).not.toHaveBeenCalled();
  });

  it("Deve atualizar tarefa quando estiver em modo edição", async () => {
    const user = userEvent.setup();

    const task = {
      id: "1",
      description: "Tarefa antiga",
      completed: false,
    };

    render(<TaskForm editingTask={task} />);

    const input = screen.getByDisplayValue("Tarefa antiga");

    await user.clear(input);
    await user.type(input, "Tarefa atualizada");
    await user.keyboard("{Enter}");

    expect(mockUpdateTask).toHaveBeenCalledWith({
      ...task,
      description: "Tarefa atualizada",
    });

    expect(mockClearEditingTask).toHaveBeenCalled();
  });

  it("Deve focar no input quando estiver editando", () => {
    const task = {
      id: "1",
      description: "Editar tarefa",
      completed: false,
    };

    render(<TaskForm editingTask={task} />);

    const input = screen.getByDisplayValue("Editar tarefa");

    expect(input).toHaveFocus();
  });
});
