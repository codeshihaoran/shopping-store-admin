import React, { useEffect, useState, } from 'react'
import '@/app.less'
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { notification } from 'antd'
import Login from './page/loginModel/login';
import Product from '@/page/productModel/product'
import Order from '@/page/orderModel/order';
import Info from '@/page/infoModel/info';
import Home from '@/page/homeModel/home';
function App() {
    const [api, contextHolder] = notification.useNotification();
    const [flag, setflag] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('api/users/info').then(res => {
            if (res.data.code === '004') {
                navigate('/login')
                setflag(false)
            } else {
                api['success']({
                    message: `你已登录成功`,
                    description: `你好！Admin`,
                });
            }
        }).catch(err => {
            console.log(err);
        })

    }, [])
    return (
        <div>
            {contextHolder}

            {/* 路由导航区 */}
            {flag && <div className='left-view'>
                <h1>Home</h1>
                <ul>
                    <li><Link to={'/'}>商城首页</Link></li>
                    <li><Link to={'/product'}>商品管理</Link></li>
                    <li><Link to={'/order'}>订单管理</Link></li>
                    <li><Link to={'/info'}>信息管理</Link></li>
                </ul>
            </div>}


            {/* 路由组件显示区域 */}
            <div className='right-view'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="product" element={<Product />} />
                    <Route path="order" element={<Order />} />
                    <Route path="info" element={<Info />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </div>
        </div>
    )
}
export default App
