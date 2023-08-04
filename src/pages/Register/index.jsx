import React from 'react'
import { useState,useEffect} from 'react'
import '../Login/index.css'
import { useNavigate,NavLink } from 'react-router-dom'
import { Input } from 'antd'
import instance from '../../utils/network'
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
        // todo-fwh-调用接口返回数据
        // console.log(event.target.value);
        
        //原始-可用调用
        // data [{"id":"001","name":"tom","age":18},{"id":"002","name":"jerry","age":19},{"id":"003","name":"tony","age":120}]
        fetch('/api/students')
        // .then(respose=>respose.text())
        .then(respose=>respose.json())
        .then((data)=>{
            console.log('data',data);    
            data.forEach((i)=>{
                console.log(i);
            })
        })
        
        // fetch('/api/students')
        // .then(response => response.json())
        // .then(students => {
        //     students.forEach((student) => {
        //     console.log(student.name);
        //     });
        // });
                
        
        // .then((data=[])=>{
        //     data.map((obj)=>{
        //         console.log(obj.name);
        //     })
        // })
        



        setusername('')
        setpassword('')
        alert("注册成功")
        navigate('/login')
    }


    // 失效-封装调用
    // instance.get('/api/students')
    // .then(respose=>respose.text())
    // .then(console.log(respose))
    // .then((res)=>{
    //     console.log('data',res);
    // })



    // instance的post方式

    // const onFinish = () => {
    //     const {validateFields} = form;
    //     validateFields()
    //         .then(values => {
    //             values.redBall = redArray.map(v => v.value);
    //             console.log('入参:', values);
    //             instance.post('/api/fwh/bicolorBall/queryColorBall', {
    //                 ...values,
    //             }).then((res = []) => {
    //                 // console.log('响应:', JSON.stringify(res));
    //                 console.log('响应:', res);
    //                 //当前页面回显数据
    //                 // setResData(JSON.stringify(res));
    //                 setResData(res);
    //                 if (res.length > 0) {
    //                     setShowTable(true);
    //                 }

    //                 //新页面-透传响应值-回显列表
    //                 // window.appData= res;
    //                 // navigate('/view?');
    //             })
    //             // console.log('values', values);
    //         })
    // };

    //组件挂载形式
    // const [htmlContent, setHtmlContent] = useState("<div>正在跳转支付宝支付...</div>");
    // useEffect(() => {
    //     console.log('组件已经挂载');
    //     fetch('/api/pay/getWebPay')
    //         .then(response => response.text())
    //         .then((data) => {
    //             console.log('data:', data);
    //             const formElement = document.createElement("div");
    //             formElement.style.display = "display:none;";
    //             formElement.innerHTML = data;//去到from
    //             if (formElement.firstChild) {
    //                 formElement.firstChild.target = "_self";
    //                 document.body.appendChild(formElement);
    //                 formElement.firstChild.submit();//进行跳转
    //                 document.body.removeChild(formElement);
    //             }
    //         });
    // }, []);
    // return (
    //     <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
    // );



  return (
    <>
    <div className='container'>
        <div className="form-container">
            <h2>注册</h2>
            <form onSubmit={handleRegist}>
                <div className="form-group">
                    {/* <input onChange={(event)=>setusername(event.target.value)} type="text" name="email" value={username} placeholder="邮箱：example@gmail.com"/> */}
                    <Input onChange={(event)=>setusername(event.target.value)} type="text" name="email" value={username} placeholder="邮箱：example@gmail.com"/>
                </div>
                <div className="form-group">
                    <Input onChange={(event)=>setpassword(event.target.value)} id="registerPassword" type="password" name="password" value={password} placeholder="密码：Password"/>
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
