import { Task } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onStatusChange: (task: Task) => void;
  onEdit: (task: Task) => void;
}

export function TaskCard({
  task,
  onDelete,
  onStatusChange,
  onEdit,
}: TaskCardProps) {
  const handleStatusChange = () => {
    const nextStatus =
      task.status === "Todo"
        ? "In Progress"
        : task.status === "In Progress"
        ? "Completed"
        : "Todo";

    onStatusChange({ ...task, status: nextStatus });
  };

  const statusColor =
    task.status === "Completed"
      ? "bg-green-500"
      : task.status === "In Progress"
      ? "bg-yellow-500"
      : "bg-gray-500";

  return (
    <Card className="rounded-2xl shadow-md hover:shadow-xl transition duration-300 dark:bg-gray-800">
      <CardContent className="p-5 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">
            {task.title}
          </h2>

          <span
            className={`px-2 py-1 rounded text-white text-xs ${statusColor}`}
          >
            {task.status}
          </span>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          {task.description}
        </p>

        <p className="text-xs text-gray-400">
          Due: {task.dueDate}
        </p>

        <div className="flex gap-2 pt-3">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onEdit(task)}
          >
            Edit
          </Button>

          <Button
            size="sm"
            onClick={handleStatusChange}
          >
            Change
          </Button>

          <Button
            size="sm"
            variant="destructive"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}