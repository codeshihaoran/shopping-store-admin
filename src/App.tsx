import React, { useEffect, useState, } from 'react'
import '@/app.less'
import { Link, useNavigate, Routes, Route, useLocation } from "react-router-dom";
import axios from 'axios';
import { notification } from 'antd'
import Login from '@/page/loginModel/login';
import Product from '@/page/productModel/product'
import Order from '@/page/orderModel/order';
import Info from '@/page/infoModel/info';
import Home from '@/page/homeModel/home';
function App() {
    const [api, contextHolder] = notification.useNotification();
    const [flag, setflag] = useState(true)
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState('')
    console.log('userInfo：', userInfo)
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
                setUserInfo(res.data.user)
            }
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className='app'>
            {contextHolder}
            <Routes>
                <Route path="login" element={<Login />} />
            </Routes>
            {/* 路由导航区 */}
            {flag &&
                <div className='app-main'>
                    {/* 导航栏区域 */}
                    <div className='topbar'> </div>
                    {/* 内容区域 */}
                    {/* 左视图 */}
                    <div className='main'>
                        <div className='left-view'>
                            <h1>Home</h1>
                            <ul>
                                <li><Link to={'/'}>商城首页</Link></li>
                                <li><Link to={'/product'}>商品管理</Link></li>
                                <li><Link to={'/order'}>订单管理</Link></li>
                                <li><Link to={'/info'}>信息管理</Link></li>
                            </ul>
                        </div>

                        {/* 路由组件显示区域 */}
                        {/* 右视图 */}
                        <div className='right-view'>
                            <div className='view-top'>
                                当前位置：面包屑 》面包屑
                            </div>

                            <div className='view-main'>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="product" element={<Product />} />
                                    <Route path="order" element={<Order />} />
                                    <Route path="info" element={<Info />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                        底部内容
                    </div>
                </div>}
        </div>
    )
}
export default App
