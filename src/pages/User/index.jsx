import { Button } from 'antd'
import React, { Component } from 'react'

const getUsers=()=>{
    fetch('/api/users')
    .then(res=>res.json())
    .then((data)=>{
        console.log('data',data);
    })
}

export default class User extends Component {
   
    
  render() {
    return (
      <div>
        <Button type='primary' onClick={getUsers}>获取用户列表</Button>
        {/* todo-fwh-列表数据传参到列表页-参数透传 */}
      </div>
    )
  }
}
