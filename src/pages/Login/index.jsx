import React, { useState } from 'react'
import './index.css'
import { NavLink,useNavigate } from 'react-router-dom'
import { Button, Form,Input } from 'antd';
/**
 * 登录页面
 */

export default function LoginPage() {
  //定义跳转函数
  const navigate = useNavigate();
  function jumpRegist() {
      navigate("/register");
  }

  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  
  const handleLogin=(event)=>{
     event.preventDefault();
     console.log('登录信息：',username,password);
     setusername('');
     setpassword('');
     alert("登录成功")
     localStorage.setItem("token",true)
     navigate('/dashboard')
  }
  
  return (
    <>
      <div className='container'>
        <div className='form-container'>
          <h2>登录</h2>
          <form onSubmit={handleLogin}>
            <Input className='form-group' type='text' value={username} onChange={(event)=>setusername(event.target.value)} placeholder='邮箱用户名'/>
            <Input className='form-group' type='password' value={password} onChange={(event)=>setpassword(event.target.value)} placeholder='password'/>
            <button id='loginSubmitId' type='submit'>Login</button>
            {/* <Button type='primary'>登录</Button> */}
          </form>
          <p>
            还没有账户吗? 
            <NavLink to='/register' onClick={jumpRegist}>开始注册</NavLink>
          </p>
        </div>        
      </div>
    </>
  )
}
