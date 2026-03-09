import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import TasksView from ".";
import type { Task } from "../../../../@types/task";

const mockUseFilteredTasks = vi.fn();

vi.mock("../../hooks/useFilteredTasks", () => ({
  default: () => mockUseFilteredTasks(),
}));

vi.mock("../TaskCard", () => ({
  default: ({ task }: { task: Task }) => (
    <div data-testid="task-card">{task.description}</div>
  ),
}));

beforeEach(() => {
  vi.clearAllMocks();
});

describe("TasksView", () => {
  it("Deve mostrar mensagem quando não houver tarefas", () => {
    mockUseFilteredTasks.mockReturnValue([]);

    render(<TasksView />);

    expect(screen.getByText("Nenhuma tarefa encontrada.")).toBeInTheDocument();
  });

  it("Deve renderizar tarefas quando existirem", () => {
    mockUseFilteredTasks.mockReturnValue([
      { id: "1", description: "Tarefa 1", completed: false },
      { id: "2", description: "Tarefa 2", completed: false },
    ]);

    render(<TasksView />);

    expect(screen.getByText("Tarefa 1")).toBeInTheDocument();
    expect(screen.getByText("Tarefa 2")).toBeInTheDocument();
  });

  it("Deve renderizar a quantidade correta de TaskCards", () => {
    mockUseFilteredTasks.mockReturnValue([
      { id: "1", description: "Tarefa 1", completed: false },
      { id: "2", description: "Tarefa 2", completed: false },
      { id: "3", description: "Tarefa 3", completed: false },
    ]);

    render(<TasksView />);

    expect(screen.getAllByTestId("task-card")).toHaveLength(3);
  });
});
