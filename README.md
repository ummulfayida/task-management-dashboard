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
