import React from 'react'
import { useState} from 'react'
import '../Login/index.css'
import { useNavigate,NavLink } from 'react-router-dom'
import { Input } from 'antd'
/**
 * 注册页面
 * @returns 
 */
export default function Register() {
    const navigate= useNavigate()
    function jumpLogin(){
        navigate("/login")
    }

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')


    const handleRegist=(event)=>{
        event.preventDefault();
        console.log('注册信息',username,password);
        setusername('')
        setpassword('')
        alert("注册成功")
    }

  return (
    <>
    <div className='container'>
        <div className="form-container">
            <h2>注册</h2>
            <form onSubmit={handleRegist}>
                <div className="form-group">
                    {/* <input onChange={(event)=>setusername(event.target.value)} type="text" name="email" value={username} placeholder="邮箱：example@gmail.com"/> */}
                    <Input onChange={(event)=>setusername(event.target.value)} type="email" name="email" value={username} placeholder="邮箱：example@gmail.com"/>
                </div>
                <div className="form-group">
                    <input onChange={(event)=>setpassword(event.target.value)} id="registerPassword" type="password" name="password" value={password} placeholder="密码：Password"/>
                </div>
                <button id="registerSubmitId" type="submit">注册</button>
            </form>
            <p>
                已经有账号吗?
                <NavLink to='/login' onClick={jumpLogin}>开始登录</NavLink>
            </p>
        </div>
    </div>
    </>
  )
}
