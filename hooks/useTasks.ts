"use client";

import { useEffect, useState } from "react";
import { Task, TaskStatus } from "@/lib/types";
import { v4 as uuid } from "uuid";

const STORAGE_KEY = "tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // ✅ Load tasks from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedTasks = localStorage.getItem(STORAGE_KEY);

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks) as Task[]);
    }

    setIsLoaded(true);
  }, []);

  // ✅ Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks, isLoaded]);

  // ✅ Create Task
  const addTask = (task: Omit<Task, "id">) => {
    const newTask: Task = {
      ...task,
      id: uuid(),
    };

    setTasks((prev) => [...prev, newTask]);
  };

  // ✅ Update Task (Edit full task)
  const updateTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  // ✅ Delete Task
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // ✅ Change Status only
  const changeStatus = (id: string, status: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    changeStatus,
  };
}