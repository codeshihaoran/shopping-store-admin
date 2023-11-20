import React, { useEffect, useState, } from 'react'
import '@/app.less'
import { Link, useNavigate, Routes, Route, useLocation } from "react-router-dom";
import axios from 'axios';
import { notification } from 'antd'

// page
import Login from '@/page/loginModel/login';
import Product from '@/page/productModel/product'
import Order from '@/page/orderModel/order';
import Info from '@/page/infoModel/info';
import Home from '@/page/homeModel/home';
import Action from '@/page/actionModel/action'

function App() {
    const [api, contextHolder] = notification.useNotification();
    const [flag, setflag] = useState(true)
    const [breadCrumbName, setBreadCrumbName] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const breadCrumb = [
        {
            id: 1,
            title: '商城首页',
            url: '/'
        }, {
            id: 2,
            title: '商品管理',
            url: '/product'
        }, {
            id: 3,
            title: '订单管理',
            url: '/order'
        }, {
            id: 4,
            title: '信息管理',
            url: '/info'
        }
    ]
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
    useEffect(() => {
        breadCrumb.map(item => {
            if (location.pathname == item.url) {
                setBreadCrumbName(item.title)
            }
        })
    })
    return (
        <div className='app'>
            {contextHolder}
            <Routes>
                <Route path="login" element={<Login />} />
            </Routes>
            {flag &&
                <div className='app-main'>
                    {/* 导航栏区域 */}
                    <div className='topbar'> </div>
                    {/* 左视图 */}
                    <div className='main'>
                        <div className='left-view'>
                            <div className='left-view-top'>
                                <a href="#">SHOPPING-ADMIN</a>
                            </div>
                            <ul>
                                {breadCrumb.map(item => <li key={item.id}><Link to={item.url}>{item.title}</Link></li>)}
                            </ul>
                        </div>
                        {/* 右视图 */}
                        <div className='right-view'>
                            <div className='view-top'>
                                当前位置：{breadCrumbName}
                            </div>
                            <div className='view-main'>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="product" element={<Product />} />
                                    <Route path="action" element={<Action />} />
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
