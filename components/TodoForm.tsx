import axios from 'axios';
import React, { useEffect, useState } from 'react'

type TodoFormProps={
    username:string,
    getTodos:() => Promise<void>,
    getUserTodos:(username: string) => Promise<void>
}

const TodoForm = ({username,getTodos,getUserTodos}:TodoFormProps) => {
    const BASE_URL="https://honobackendtodoapp.noa240240.workers.dev/api"
    const [storageUsername,setStorageUsername]=useState("");
    useEffect(()=>{
        if(typeof localStorage !== "undefined"){
            if(localStorage.getItem("username") && localStorage.getItem("username")!==""){
                setStorageUsername(localStorage.getItem("username")!)
            }
        }
    },[])
    const [content,setContent]=useState("");
    const handleChangeContent:React.ChangeEventHandler<HTMLInputElement>
    =(e)=>{
        setContent(e.target.value)
    }
    const handleAddTodo:React.MouseEventHandler<HTMLButtonElement>
    =async(e)=>{
        e.preventDefault();
        if(content==="") return
        const data={content,storageUsername}
        const res=await axios.post(`${BASE_URL}/todos`,data)
        if(res.data.message==="Please authenticate the user"){
            return
        }
        setContent("");
        if(username===""){
            getTodos()
        }else{
            getUserTodos(username)
        }
    }
    return (
        <form action='/' className=''>
            <label htmlFor="content" className='block'>新しいタスクを追加</label>
            <input type="text" id='content' name='content' value={content} onChange={handleChangeContent} />
            <button type='submit' onClick={handleAddTodo}>追加</button>
        </form>
    )
}

export default TodoForm