import React, { useEffect, useState, } from 'react'
import '@/app.less'
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { notification, Menu } from 'antd'
import type { MenuProps } from 'antd';
import { BankTwoTone } from '@ant-design/icons';
import {
    AppstoreOutlined,
    CalendarOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import BreadCrumbs from '@/compentens/breadCrumb';

// 路由组件
import Login from '@/page/loginModel/login';
import Product from '@/page/productModel/product'
import Order from '@/page/orderModel/order';
import Info from '@/page/infoModel/info';
import Home from '@/page/homeModel/home';
import Action from '@/page/actionModel/action'
import Revise from '@/page/reviseModel/revise';
import Addproduct from '@/page/addProductModel/add-product';
import User from '@/page/userModel/user';
import Details from '@/page/detailsModel/details';

// 导航菜单

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('商城首页', 'sub1', <MailOutlined />, [
        getItem(<Link to={'/'}>仪表盘</Link>, '1'),
    ]),
    getItem('商品管理', 'sub2', <CalendarOutlined />, [
        getItem(<Link to={'/product'}>商品列表</Link>, '2'),
        getItem(<Link to={'/add-product'}>新增商品</Link>, '3'),
    ]),
    getItem('订单管理', 'sub3', <AppstoreOutlined />, [
        getItem(<Link to={'/order'}>订单列表</Link>, '4'),
    ]),
    getItem('信息管理', 'sub4', <SettingOutlined />, [
        getItem(<Link to={'/info'}>信息列表</Link>, '5'),

    ]),
    getItem('用户管理', 'sub5', <SettingOutlined />, [
        getItem(<Link to={'/user'}>用户列表</Link>, '6'),

    ]),
]

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
        <div className='app'>
            {contextHolder}
            <Routes>
                <Route path="login" element={<Login />} />
            </Routes>
            {flag &&
                <div className='app-main'>
                    {/* 导航栏区域 */}
                    <div className='topbar'>
                        <div className='topbar-left'><BankTwoTone /> Shopping</div>
                        <div className='topbar-right'>aaa</div>
                    </div>
                    {/* 左视图 */}
                    <div className='main'>
                        <div className='left-view'>
                            <div className='left-view-top'>
                                <a href="#"></a>
                            </div>
                            <Menu style={{ width: 256 }}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                items={items} />
                        </div>
                        {/* 右视图 */}
                        <div className='right-view'>
                            <div className='view-top'>
                                <BreadCrumbs />
                            </div>
                            <div className='view-main'>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="product" element={<Product />} />
                                    <Route path="action" element={<Action />} />
                                    <Route path="revise" element={<Revise />} />
                                    <Route path="add-product" element={<Addproduct />} />
                                    <Route path="order" element={<Order />} />
                                    <Route path='details' element={<Details />} />
                                    <Route path="info" element={<Info />} />
                                    <Route path='user' element={<User />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                        底部内容
                    </div>
                </div>}
        </div >
    )
}
export default App
