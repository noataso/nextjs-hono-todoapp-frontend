import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const RegisterForm = () => {
  const router=useRouter();
  const BASE_URL="https://honobackendtodoapp.noa240240.workers.dev/api"
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const handleChangeUsername:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
    setUsername(e.target.value)
  }
  const handleChangeEmail:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
    setEmail(e.target.value)
  }
  const handleChangePassword:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
    setPassword(e.target.value)
  }
  const handleChangeConfirmPassword:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
    setConfirmPassword(e.target.value)
  }
  const handleRegister:React.MouseEventHandler<HTMLButtonElement>=async(e)=>{
    e.preventDefault();
    if(password!==confirmPassword){
      return
    }
    const data={username,email,password}
    const res=await axios.post(`${BASE_URL}/auth/register`,data)
    if(res.data.username==="Username or email already exist"){
      return
    }
    return [
      localStorage.setItem("username",res.data.username),
      router.push(`/account/${res.data.username}`),
    ]
  }
  useEffect(()=>{
    if(typeof localStorage !== "undefined"){
      const storageUsername=localStorage.getItem("username")
      if(storageUsername && storageUsername!==""){
        router.push(`/account/${storageUsername}`)
      }
    }
  },[router])
  return (
    <form action="" className=''>
      <div>
        <label htmlFor="username" className='block text-black'>ユーザーネーム</label>
        <input type="text" id='username' name='username' autoComplete='off' value={username} onChange={handleChangeUsername} className='' />
      </div>
      <div>
        <label htmlFor="email" className='block text-black'>メールアドレス</label>
        <input type="email" id='email' name='email' autoComplete="off" value={email} onChange={handleChangeEmail} className='' />
      </div>
      <div>
        <label htmlFor="password" className='block text-black'>パスワード</label>
        <input type="password" id='password' name='password' autoComplete="off" value={password} onChange={handleChangePassword} className='' />
      </div>
      <div>
        <label htmlFor="confirmPassword" className='block text-black'>確認用パスワード</label>
        <input type="password" id='confirmPassword' autoComplete="off" value={confirmPassword} onChange={handleChangeConfirmPassword} className='' />
      </div>
      <button type='submit' onClick={handleRegister}
        className='text-white bg-blue-600 rounded-md p-2 pb-2.5'
      >
        登録
      </button>
    </form>
  )
}

export default RegisterForm;
