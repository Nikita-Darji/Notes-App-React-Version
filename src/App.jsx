import React, { useEffect, useState } from "react";
import TaskDashboard from "./components/TaskDashboard";
import AddTaskForm from "./components/AddTaskForm";

const App = () => {

  const [showForm, setShowForm] = useState(false);

  return(
    <>
    {showForm && <AddTaskForm closeForm={()=>setShowForm(false)}/>}
      
     {!showForm && <TaskDashboard openForm={()=>setShowForm(true)} />} 
    </>
  );
};

export default App;