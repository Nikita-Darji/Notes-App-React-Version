import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

const TaskCard = ({task,openForm}) => {

    const {deleteTask,settaskedit} =useContext(TodoContext)

   const taskcolor = task.priority==="High"? "text-red-600": task.priority==="Medium"? "text-yellow-600":"text-green-600"

    
    return (
        <>
             <div className="rounded-3xl bg-black w-1/4 p-4 mb-4 border-2 border-emerald-600 text-white">
                <div className="flex justify-between mb-18">
                    <h2 className={`${taskcolor}`}>{task.priority}</h2>
                    <p>{task.dueDate}</p>
                 </div>
                <div className="flex-col mb-14">
                    <h4 className="text-2xl mb-5">{task.name}</h4>
                    <p>{task.description}</p>
                </div>
                <div className="flex justify-around">
                    <button className="border-2 border-emerald-600 px-4 py-1.5 rounded-2xl" 
                    onClick={()=>{settaskedit(task);openForm()}} >Update</button>
                    <button className="border-2 border-emerald-600 px-4 py-1.5 rounded-2xl" onClick={()=>deleteTask(task.id)}>Delete</button></div>
            </div>
        </>

    )
};

export default TaskCard;