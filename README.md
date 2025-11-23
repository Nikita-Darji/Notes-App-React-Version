This is the React version of my Notes + Todo project that I first built using HTML/CSS/JavaScript.
Now I rebuilt the whole UI and functionality in React, and moved everything into components with global state using Context API.

Right now it's a single-user app that stores data in localStorage, and supports adding, deleting, and updating tasks.


--ScreenShots

--------------------Todo/Notes Dashboard

<img width="1366" height="592" alt="Screenshot (106)" src="https://github.com/user-attachments/assets/6ec2a944-4226-4d3f-8e1a-771dc872e19f" />


--------------------Drag and Drop Feature

<img width="1366" height="599" alt="Screenshot (111)" src="https://github.com/user-attachments/assets/b85bea5c-443f-45b2-8467-8f15d554e5e8" />

<img width="1366" height="597" alt="Screenshot (112)" src="https://github.com/user-attachments/assets/611a0f51-5afd-413d-9528-506b8e5d2865" />

---------------------Add Task Form

<img width="1366" height="595" alt="Screenshot (107)" src="https://github.com/user-attachments/assets/48cae465-ccc6-4d2f-a235-e6984638cffb" />

---------------------Filter Tasks 

<img width="1366" height="595" alt="Screenshot (108)" src="https://github.com/user-attachments/assets/bbfa4c37-f22e-4fd0-9bf5-8526775fb1f3" />

<img width="1366" height="595" alt="Screenshot (109)" src="https://github.com/user-attachments/assets/11bd3bdf-2e7f-477a-9115-9baf329a7559" />

<img width="1366" height="601" alt="Screenshot (113)" src="https://github.com/user-attachments/assets/0651a93d-2421-42c0-b1e0-b2cda02a4309" />

----------------------Update form autofills
<img width="1366" height="594" alt="Screenshot (110)" src="https://github.com/user-attachments/assets/ff5a669a-5f12-4276-a5f6-ecf520b4627e" />




->Current Features

  -drag & drop card (realtime ui changes) 
  

->Add Task

  -Form to add a new note/todo

  -Stores data in React state + localStorage


->Delete Task

  -Each card has a delete button


->Update Task

  -Clicking Update opens the same form

  -Form auto-fills existing task values

  -On submit, updates the task instead of adding a new one

  -Priority Colors


->Component-Based

  -TaskDashboard

  -TaskCard

  -AddTaskForm

  -TodoContext


->What I Used

  -React + Vite

  -Tailwind CSS

  -Context API for global state

  -LocalStorage for saving tasks

  -JSX + React Hooks (useState, useEffect)



