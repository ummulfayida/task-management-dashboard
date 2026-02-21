"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  return (
    <nav className="border-b bg-white dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-lg font-bold">Task Manager</h1>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            Toggle Theme
          </Button>

          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}