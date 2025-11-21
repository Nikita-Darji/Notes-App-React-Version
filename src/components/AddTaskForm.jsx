import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Context/TodoContext";
const AddTaskForm = ({closeForm}) => {

    const {Todo,setTodo,taskedit,settaskedit}=useContext(TodoContext)


    const [name, setname]=useState("")
    const [description, setdescription]=useState("")
    const [priority, setpriority]=useState("High")
    const [dueDate, setdueDate]=useState("")

    ///------UseEffect for EditForm---///
    //----only works when name is controlled in input---//
    useEffect(()=>{
        if(taskedit){
            setname(taskedit.name),
            setdescription(taskedit.description),
            setpriority(taskedit.priority),
            setdueDate(taskedit.dueDate)
        }
    },[taskedit])
    ///--------Form Update Automatically for EditForm-------///

    //------------ADD new Task--------------///
    const formSubmit=(e)=>{
        e.preventDefault();

        if(taskedit){
            const editTask = Todo.map((t)=>
                 t.id===taskedit.id?  {...t,name,description,priority,dueDate} : t
            )
            setTodo(editTask)
            settaskedit(null)
            closeForm()
            return
        }
        
        const formData = {
            id:Date.now(),
            name,
            description,
            priority,
            dueDate
            }
        console.log(formData)
        const updatedList = [...Todo,formData]
        setTodo(updatedList)
        
        closeForm()        
    }
    //------------ADD new Task--------------///

    return (
        <>  
        <div className="absolute top-0 w-full h-full bg-white flex justify-center items-center">
        <div className=" w-xl h-auto p-6 rounded-3xl  border-2 border-emerald-600 bg-black text-white">
                <h2 className="text-2xl text-center mb-4 text-emerald-600">Add New Task</h2>
                <form className="flex flex-col gap-4">
                    <input value={name}
                    onChange={
                        (e)=>{setname(e.target.value)}
                    } type="text" placeholder="Task Title" className="p-2 rounded-lg outline-0 border-2 border-emerald-600 text-white"/>
                    <textarea value={description}
                    onChange={
                        (e)=>{setdescription(e.target.value)}
                    }
                     placeholder="Task Description" className="p-2 rounded-lg outline-0 border-2 border-emerald-600 text-white"></textarea>
                    <select value={priority}
                    onChange={
                        (e)=>{setpriority(e.target.value)}
                    }
                     className="p-2 rounded-lg outline-0 border-2 border-emerald-600 text-white">
                        <option className="bg-black text-white" defaultChecked value="High">High Priority</option>
                        <option className="bg-black text-white" value="Medium">Medium Priority</option>
                        <option className="bg-black text-white" value="Low">Low Priority</option>
                    </select>
                    <input value={dueDate}
                     onChange={
                        (e)=>{setdueDate(e.target.value)}
                    }
                     className="p-2 rounded-lg outline-0 border-2 border-emerald-600 text-white" type="date"/>
                    <button type="submit" onClick={formSubmit} className="bg-emerald-600 text-white p-2 rounded-lg mt-4">Add Task</button>
                </form>
            </div>
        </div>
            
        </>
    );
}
export default AddTaskForm;