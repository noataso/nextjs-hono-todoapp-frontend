import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TodoType, UserType } from './Type';
import TodoForm from './TodoForm';
import { useRouter } from 'next/router';

type TodosProps={
    username:string
}

const Todos = ({username}:TodosProps) => {
    const router=useRouter();
    const BASE_URL="https://honobackendtodoapp.noa240240.workers.dev/api"
    const [todos,setTodos]=useState<TodoType[]>([]);
    const [user,setUser]=useState<any>([]);
    const [storageUsername,setStorageUsername]=useState("");
    const [showEditTagId,setShowEditTagId]=useState<number>(0);
    const [editContentId,setEditContentId]=useState<number>(0);
    const [editContent,setEditContent]=useState("");
    const getTodos=(async()=>{
        await axios.get(`
            ${BASE_URL}/todos
        `).then((res)=>{
            console.log(res.data)
            setTodos(res.data)
        })
    })
    const getUser=(async(storageUsername:string)=>{
        await axios.get(`
            ${BASE_URL}/users/${storageUsername}
        `).then((res)=>{
            console.log(res.data)
            setUser(res.data)
        })
    })
    const getUserTodos=(async(username:string)=>{
        await axios.get(`
            ${BASE_URL}/todos/${username}
        `).then((res)=>{
            console.log(res.data)
            setTodos(res.data)
        })
    })
    const handleShowEditTag=(e:React.MouseEvent<HTMLButtonElement>,todoId:number)=>{
        e.preventDefault();
        setShowEditTagId(todoId);
    }
    const handleChangeCompleted
    =async(
        e:React.ChangeEvent<HTMLInputElement>,
        todoId:number,
        completed:number,
        byUsername:string,
    )=>{
        e.preventDefault();
        if(storageUsername!==byUsername){
            return
        }
        const data={todoId,completed}
        await axios.put(`${BASE_URL}/todos/${todoId}/check`,data)
        if(username===""){
            getTodos()
        }else{
            getUserTodos(username)
        }
    }
    const handleHideEditTag:React.MouseEventHandler<HTMLButtonElement>=()=>{
        setShowEditTagId(0);
    }
    const handleCancelEditContent
    =async(
        e:React.MouseEvent<HTMLButtonElement>,
        todoId:number
    )=>{
        e.preventDefault();
        if(editContent==="") return
        const data={editContent}
        await axios.put(`${BASE_URL}/todos/${todoId}/update`,data)
        setEditContentId(0);
        if(username===""){
            getTodos()
        }else{
            getUserTodos(username)
        }
    }
    const handleEditContent=(e:React.MouseEvent<HTMLButtonElement>,todoId:number,content:string)=>{
        setEditContentId(todoId);
        setEditContent(content);
        setShowEditTagId(0);
        return
    }
    const handleDeleteContent=async(e:React.MouseEvent<HTMLButtonElement>,todoId:number)=>{
        e.preventDefault();
        await axios.delete(`${BASE_URL}/todos/${todoId}`);
        setShowEditTagId(0);
        if(username===""){
            getTodos()
        }else{
            getUserTodos(username)
        }
    }
    const handleChangeEditContent:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setEditContent(e.target.value)
    }
    useEffect(()=>{
        if(typeof localStorage !== "undefined"){
            const storageUsername=localStorage.getItem("username")
            setStorageUsername(storageUsername!)
            if(!storageUsername || storageUsername===""){
                router.push(`/account/login`)
                return
            }
            if(storageUsername==="undefined"){
                localStorage.removeItem("username")
                router.push(`/account/login`)
                return
            }
            if(username===""){
                getTodos();
                getUser(storageUsername);
                return
            }
            if(storageUsername!==username){
                router.push(`/account/${storageUsername}`)
                return
            }
            getUser(storageUsername);
            getUserTodos(username);
        }
    },[router, username])
  return (
    <div>
        {typeof storageUsername!=="undefined"?
        <TodoForm username={username} getTodos={getTodos} getUserTodos={getUserTodos} />
        :""
        }
        {
        todos.length!==0?
        todos.map((todo:TodoType)=>(
            // eslint-disable-next-line react/jsx-key
            <div key={todo.id} className='flex'>
                <div key={todo.id} className={`${todo.completed===0? "bg-blue-500 text-black":"bg-green-500 text-black"}
                    mx-auto mb-3 font-bold p-4 pb-4.5 rounded-md`
                }>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <input id='checkbox' type="checkbox" className='form-checkbox h-5 w-5 me-3 rounded-md'
                                checked={todo.completed===1? true:false}
                                onChange={(e)=>handleChangeCompleted(e,todo.id,todo.completed,todo.by_username)}
                            />
                            {editContentId!==todo.id?
                                <div className={`${todo.completed===0? "":"line-through"} text-lg`}>
                                {todo.content}</div>
                                :<input type="text" id='content' name='content' className='z-20' onChange={handleChangeEditContent} value={editContent} />
                            }
                        </div>
                        {todo.completed===0?
                            user.username==todo.by_username?
                                <button type='button' className='bg-slate-400 p-1.5 px-3 text-sm rounded-md'
                                    onClick={(e)=>handleShowEditTag(e,todo.id)}
                                >編集</button>
                                :""
                            :""
                        }
                    </div>
                    <div className='flex items-center justify-center'>
                        {username===""?
                            <p>
                                投稿者:{todo.by_username}
                            </p>
                            :""
                        }
                    </div>
                </div>
                {showEditTagId===todo.id?
                    <div className='z-20 bg-slate-500 text-md rounded-md border-black flex flex-col'>
                        <button className='text-green-500 border-black p-2 pb-2.5'
                            onClick={(e)=>handleEditContent(e,showEditTagId,todo.content)}
                        >変更</button>
                        <button className='text-red-500 p-2 pb-2.5'
                            onClick={(e)=>handleDeleteContent(e,showEditTagId)}
                        >削除</button>
                    </div>:""
                }
            </div>
        ))
        :""
        }
        {showEditTagId!==0?
            <>
                <button className='fixed top-0 left-0 z-10 bg-transparent w-full h-full'
                    onClick={handleHideEditTag}
                >
                </button>
            </>
            :""
        }
        {editContentId!==0?
            <>
                <button className='fixed top-0 left-0 z-10 bg-transparent w-full h-full'
                    onClick={(e)=>handleCancelEditContent(e,editContentId)}
                >
                </button>
            </>
            :""
        }
    </div>
  )
}

export default Todos;