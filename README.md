# Tugas Tracker 📓

Tugas Tracker is a simple website designed to help you manage your classes and keep track of your assignments through the semester. Instead of relying on different tracking apps, notes, or just vibes, this website puts everything you need in one place.

## Features 💡

- **Manajemen Mata Kuliah (CRUD)**  
  Easily add, view, update, or delete your classes. 

- **Manajemen Tugas (CRUD)**  
  Link each of your tasks to a specific class with name, deadline, and details.

- **Tracker Tugas**  
  Give your tasks statuses: Not Started (of course it hasn't), In Progress (barely), or Completed (rare event)

- **Kalkulator Nilai**  
  Tells you whether you're going to pass or if you're cooked.

- **Bolos Tracker**  
  Helps you decide if you should go to class or just sleep in.

## Folder Structure 📂

```
src/  
├── assets/ # images, icons  
├── components/ # reusable UI (TaskCard, Navbar, etc.)  
├── hooks/ # custom hooks  
├── pages/ # web pages (Dashboard, Tasks, Classes)  
├── services/ # API functions  
├── styles/ # CSS files  
├── utils/ # helper functions (format dates, etc.)  
│  
├── App.jsx # root application  
├── App.css # app styling  
├── main.jsx # entry point  
└── index.css # global CSS
```