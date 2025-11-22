import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({children})=>{

    const [Todo,setTodo] =useState([]);

    useEffect(()=>{
        const stored = localStorage.getItem("todos");
        if(stored){
            setTodo(JSON.parse(stored))
        }else{
                fetch("todo.json")
                .then(req=>req.json())
                .then(data=>{
                    setTodo(data)
                    localStorage.setItem("todos",JSON.stringify(data))
                })
                .catch(err=>console.log("API ERROR",err))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(Todo))
    },[Todo])

 //------------Delete Task--------------///
    const deleteTask=(id)=>{
        const updatedTask= Todo.filter((t)=>t.id !== id)
        setTodo(updatedTask)
        }
 //------------Delete Task--------------///

//------------Update Task--------------///

const[taskedit,settaskedit] = useState(null)

//------------Update Task--------------///

const [priority,setpriority]=useState('all')


// localStorage.clear()

    return(
        <TodoContext.Provider
        value={{Todo,setTodo,deleteTask,taskedit,settaskedit,priority,setpriority}}
        >{children}</TodoContext.Provider>
    )

}