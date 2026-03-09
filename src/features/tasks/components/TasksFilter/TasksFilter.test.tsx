import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, vi } from "vitest";
import TasksFilter from ".";

const mockSetFilter = vi.fn();

const mockUseTaskStore = vi.fn();

vi.mock("../../store/taskStore", () => ({
  useTaskStore: () => mockUseTaskStore(),
}));

describe("TasksFilter Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Deve renderizar todos os botões de filtro", () => {
    mockUseTaskStore.mockReturnValue({
      filter: "all",
      setFilter: mockSetFilter,
    });

    render(<TasksFilter />);

    expect(screen.getByText("Todas")).toBeInTheDocument();
    expect(screen.getByText("Pendentes")).toBeInTheDocument();
    expect(screen.getByText("Concluídas")).toBeInTheDocument();
  });

  it("Deve chamar setFilter com 'all'", async () => {
    const user = userEvent.setup();

    mockUseTaskStore.mockReturnValue({
      filter: "pending",
      setFilter: mockSetFilter,
    });

    render(<TasksFilter />);

    await user.click(screen.getByText("Todas"));

    expect(mockSetFilter).toHaveBeenCalledWith("all");
  });

  it("Deve chamar setFilter com 'pending'", async () => {
    const user = userEvent.setup();

    mockUseTaskStore.mockReturnValue({
      filter: "all",
      setFilter: mockSetFilter,
    });

    render(<TasksFilter />);

    await user.click(screen.getByText("Pendentes"));

    expect(mockSetFilter).toHaveBeenCalledWith("pending");
  });

  it("Deve chamar setFilter com 'completed'", async () => {
    const user = userEvent.setup();

    mockUseTaskStore.mockReturnValue({
      filter: "all",
      setFilter: mockSetFilter,
    });

    render(<TasksFilter />);

    await user.click(screen.getByText("Concluídas"));

    expect(mockSetFilter).toHaveBeenCalledWith("completed");
  });

  it("Deve destacar o filtro ativo", () => {
    mockUseTaskStore.mockReturnValue({
      filter: "pending",
      setFilter: mockSetFilter,
    });

    render(<TasksFilter />);

    const pendingButton = screen.getByText("Pendentes");

    expect(pendingButton.className).toContain("bg-blue-600");
  });
});
