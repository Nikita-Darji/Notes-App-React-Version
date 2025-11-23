This is the React version of my Notes + Todo project that I first built using HTML/CSS/JavaScript.
Now I rebuilt the whole UI and functionality in React, and moved everything into components with global state using Context API.

Right now it's a single-user app that stores data in localStorage, and supports adding, deleting, and updating tasks.

--Current Features

-drag & drop card (realtime ui changes) 

--Add Task

-Form to add a new note/todo

-Stores data in React state + localStorage


--Delete Task

-Each card has a delete button


--Update Task

-Clicking Update opens the same form

-Form auto-fills existing task values

-On submit, updates the task instead of adding a new one

-Priority Colors


--Component-Based

-TaskDashboard

-TaskCard

-AddTaskForm

-TodoContext


--What I Used

-React + Vite

-Tailwind CSS

-Context API for global state

-LocalStorage for saving tasks

-JSX + React Hooks (useState, useEffect)
