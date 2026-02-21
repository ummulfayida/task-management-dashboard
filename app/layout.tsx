import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Task Dashboard",
  description: "Simple Task Management App",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <main className="container mx-auto py-6 px-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}