import React, { useEffect } from 'react'
import '@/app.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { notification } from 'antd'
function App() {
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('api/users/info').then(res => {
            console.log(res.data);
            if (res.data.code === '004') {
                navigate('/login')
            }
            api['success']({
                message: `你已登录成功`,
                description: `你好！Admin`,
            });
        }).catch(err => {
            console.log(err);
        })
    })
    return (
        <div>
            {contextHolder}
            <h1>Home</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">login</Link>
            </nav>
        </div>
    )
}
export default App
