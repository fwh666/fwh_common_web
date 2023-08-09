import React, { useEffect ,useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * 1. 验证登录状态
 * 2. 否-跳转到登录页
 * @returns 
 */
export default function DashBoard() {
    const navigate=useNavigate()
    const location=useLocation()
    // const [isLogined, setisLogined] = useState(false)
    useEffect(()=>{
        const token = localStorage.getItem("token")
        console.log('token',token);
        if(!token||null===token){
            navigate('/login')
        }
    },[location])

  return (
    <div>
        <h1>welcome hello</h1>
    </div>
  )
}
