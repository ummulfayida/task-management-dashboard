"use client";

import { useTasks } from "@/hooks/useTasks";
import { TaskForm } from "@/components/TaskForm";
import { TaskCard } from "@/components/TaskCard";
import { Task } from "@/lib/types";
import { useState } from "react";

export default function Dashboard() {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const tasksPerPage = 6;

  // 🔎 Filter + Search + Sort
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((task) =>
      filter === "All" ? true : task.status === filter
    )
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  // 📄 Pagination
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(
    indexOfFirstTask,
    indexOfLastTask
  );

  const totalPages = Math.ceil(
    filteredTasks.length / tasksPerPage
  );

  // 📝 Handle Create + Edit
  const handleSubmit = (data: Omit<Task, "id">) => {
    if (editingTask) {
      updateTask({ ...editingTask, ...data });
      setEditingTask(null);
    } else {
      addTask(data);
    }
  };
  const handleDelete = (id: string) => {
  if (confirm("Are you sure you want to delete this task?")) {
    deleteTask(id);
  }
};

 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-8">
    <div className="max-w-6xl mx-auto space-y-8">

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Task Dashboard
        </h1>
        <TaskForm
          onSubmit={handleSubmit}
          editingTask={editingTask}
        />
      </div>
      {/* Stats Cards */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow">
    <p className="text-sm text-gray-500">Total Tasks</p>
    <h2 className="text-xl font-bold">{tasks.length}</h2>
  </div>

  <div className="p-4 bg-green-100 dark:bg-green-900 rounded-xl shadow">
    <p className="text-sm">Completed</p>
    <h2 className="text-xl font-bold">
      {tasks.filter(t => t.status === "Completed").length}
    </h2>
  </div>

  <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded-xl shadow">
    <p className="text-sm">In Progress</p>
    <h2 className="text-xl font-bold">
      {tasks.filter(t => t.status === "In Progress").length}
    </h2>
  </div>

  <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl shadow">
    <p className="text-sm">Todo</p>
    <h2 className="text-xl font-bold">
      {tasks.filter(t => t.status === "Todo").length}
    </h2>
  </div>
</div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          className="flex-1 border p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Search tasks..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded-xl shadow-sm"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {currentTasks.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">
            No tasks found.
          </div>
        ) : (
          currentTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onStatusChange={updateTask}
              onEdit={setEditingTask}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-3 pt-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-xl border transition ${
                currentPage === index + 1
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white dark:bg-gray-700"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
);
}