# Task Management Dashboard

A modern Task Management Application built using:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Local Storage (Mock Backend)
- Jest (Unit Testing)

---

##  Features

- Mock Authentication
- Create Task (Modal Form)
- Edit Task
- Delete Task (with confirmation)
- Change Task Status
- Search by Title
- Filter by Status
- Sort by Due Date
- Pagination
- Dashboard Statistics Cards
- Dark Mode
- Basic Unit Test

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/ummulfayida/task-management-dashboard.git

---

## Screenshorts

-LOGIN
     [Login Page](public\login.jpg)
-DASHBOARD
    [Dashboard](public\dashboard.jpg)
-DARKMODE
    [Dark mode](public\darkmode.jpg)
-ADD TASK
    [Add Task](public\add-task.jpg)
-DELETE TASK
    [Delete task](public\delete-task.jpg)
-EDIT TASK
    [Edit task](public\edit-task.jpg)
-PAGINATION
    [pagination](public\pagination.jpg)
-SEARCH
     [Search](public\seacrh.jpg)

#  Folder structure

taskmanagement
|---app/               ->Next.js routing and layout

|--components/         ->Reusable UI
components
      |- hooks/         ->Custome state
management logic
|--lib/                 ->Type definitions
|--tests/               ->Unit tests
|--public               ->static assets & screenshorts
|--package.json         ->Dependencies & scripts
|--README.md            ->Project documentation

### Explanation

- *app/*: Contains Next.js App Router pages and layout.
- *components/*: Reusable UI components like TaskCard and TaskForm.
- *hooks/*: Custom React hooks for managing task state.
- *lib/*: Shared TypeScript types.
- *_tests_/*: Unit tests using Jest.
- *public/*: Static assets and screenshots.


##  Design Decisions

### 1️ Next.js App Router
Used Next.js App Router for modern routing structure and better scalability. It provides clear separation between layout and page components.

### 2️ TypeScript
Used TypeScript with strict typing to improve code safety, maintainability, and scalability. It helps prevent runtime errors.

### 3️ Custom Hook (useTasks)
Created a custom hook (useTasks) to separate business logic from UI components. This improves reusability and keeps components clean.

### 4️ LocalStorage as Mock Backend
Used localStorage to simulate backend functionality since no real backend was required. This allows persistent task data without an API.

### 5️ Reusable Components
Built reusable components like TaskCard and TaskForm to follow component-based architecture principles.

### 6️ Pagination
Implemented pagination to handle large task lists efficiently and improve UI performance.

### 7️ Dark Mode Support
Added dark mode using next-themes for better user experience and accessibility.

### 8️ Unit Testing
Added a basic unit test for TaskCard using Jest to demonstrate understanding of testing practices.

### 9️ Clean Folder Structure
Organized project into app, components, hooks, and lib folders for better scalability and readability
