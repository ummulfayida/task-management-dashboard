"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Task, TaskStatus } from "@/lib/types";

interface Props {
  onSubmit: (data: Omit<Task, "id">) => void;
  editingTask?: Task | null;
}

export function TaskForm({
  onSubmit,
  editingTask,
}: Props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] =
    useState<TaskStatus>("Todo");
  const [dueDate, setDueDate] = useState("");

  // 📝 Prefill when editing
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
      setDueDate(editingTask.dueDate);
      setOpen(true);
    }
  }, [editingTask]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStatus("Todo");
    setDueDate("");
  };

  const handleSubmit = () => {
    if (!title || !description || !dueDate) return;

    onSubmit({ title, description, status, dueDate });

    resetForm();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          {editingTask ? "Edit Task" : "Add Task"}
        </Button>
      </DialogTrigger>

      <DialogContent className="space-y-4">
        <DialogTitle className="text-lg font-bold">
          {editingTask ? "Edit Task" : "New Task"}
        </DialogTitle>

        <Input
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <Input
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <Input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
        />

        <select
          className="border p-2 rounded"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as TaskStatus)
          }
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">
            In Progress
          </option>
          <option value="Completed">
            Completed
          </option>
        </select>

        <Button onClick={handleSubmit}>
          {editingTask ? "Update" : "Save"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}