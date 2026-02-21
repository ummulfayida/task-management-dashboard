import { render, screen, fireEvent } from "@testing-library/react";
import { TaskCard } from "@/components/TaskCard";
import { Task } from "@/lib/types";

const mockTask: Task = {
  id: "1",
  title: "Test Task",
  description: "Test Description",
  status: "Todo",
  dueDate: "2026-02-20",
};

test("calls delete when delete button clicked", () => {
  const mockDelete = jest.fn();
  const mockStatusChange = jest.fn();
  const mockEdit = jest.fn();

  render(
    <TaskCard
      task={mockTask}
      onDelete={mockDelete}
      onStatusChange={mockStatusChange}
      onEdit={mockEdit}
    />
  );

  fireEvent.click(screen.getByText("Delete"));
  expect(mockDelete).toHaveBeenCalledWith("1");

  fireEvent.click(screen.getByText("Edit"));
  expect(mockEdit).toHaveBeenCalledWith(mockTask);
});