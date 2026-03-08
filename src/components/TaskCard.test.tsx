import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import TaskCard from "./TaskCard";

const mockDeleteTask = vi.fn();
const mockUpdateTask = vi.fn();
const mockSetEditingTask = vi.fn();

vi.mock("../store/taskStore.tsx", () => ({
  useTaskStore: () => ({
    deleteTask: mockDeleteTask,
    updateTask: mockUpdateTask,
    setEditingTask: mockSetEditingTask,
  }),
}));

describe("TaskCard Component", () => {
  const mockTask = {
    id: "1",
    description: "Test Task",
    completed: false,
  };

  it("Deve renderizar a descrição da tarefa corretamente", () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Deve chamar deleteTask com o ID correto ao confirmar a exclusão", () => {
    render(<TaskCard task={mockTask} />);

    const deleteButton = screen.getByRole("button", {
      name: `Excluir tarefa "Test Task"`,
    });

    fireEvent.click(deleteButton);

    const confirmButton = screen.getByRole("button", {
      name: "Excluir",
    });

    fireEvent.click(confirmButton);

    expect(mockDeleteTask).toHaveBeenCalledWith("1");
  });

  it("Deve chamar updateTask ao alternar o checkbox", () => {
    render(<TaskCard task={mockTask} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockUpdateTask).toHaveBeenCalledWith({
      ...mockTask,
      completed: true,
    });
  });
});
