import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { TodoContext } from "../Context/TodoContext";
const TaskDashboard = ({openForm}) => {

    const {Todo,setTodo} = useContext(TodoContext)
    
    return (
        <>
        <div className="flex items-center justify-around w-full mt-1rem p-3">
            <div>
                <button id="add" onClick={openForm} className=" px-3 py-2 rounded-full bg-emerald-600">Add More Notes</button>
            </div>
            <div>
                <button className="mx-2  px-3 py-2 rounded-full bg-red-600 "  id="btnhigh" value="high">High Priority</button>
                <button className="mx-2  px-3 py-2 rounded-full bg-yellow-600 "  id="btnmedium" value="medium">Medium Priority</button>
                <button className="mx-2  px-3 py-2 rounded-full bg-green-600 "  id="btnlow" value="low">Low Priority</button>
            </div>
        </div>
        <div>
                <div className="w-full p-3 h-auto flex gap-6 flex-wrap justify-center">
                    {Todo.map((task,index)=>{
                        return(
                            <TaskCard key={index} task={task} openForm={openForm}/>
                        )
                    })
                    }
                </div>
        </div>
            </>
    );
};

export default TaskDashboard;