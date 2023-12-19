import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

const items = [
    {
        path: '/',
        title: '商城首页',
    },
    {
        path: '/product',
        title: '商品管理',
        children: [
            {
                path: '/add-product',
                title: '添加商品',
            },
            {
                path: '/revise',
                title: '修改商品',
            },
            {
                path: '/action',
                title: '商品操作',
            },
        ],
    },
    {
        path: '/order',
        title: '订单管理',
        children: [
            {
                path: '/details',
                title: '订单详情',
            }
        ]
    },
    {
        path: '/user',
        title: '用户管理'
    },
    {
        path: '/info',
        title: '信息管理'
    }
];

const BreadCrumbs = () => {
    const [breadCrumbName, setBreadCrumbName] = useState("")
    const location = useLocation();
    useEffect(() => {
        items.map(item => {
            if (item.path === location.pathname) {
                setBreadCrumbName(item.title)
            }
            if (item.children) {
                item.children.map(it => {
                    if (it.path === location.pathname) {
                        setBreadCrumbName(item.title + '  /  ' + it.title)
                    }
                })
            }

        })
    })

    return <Breadcrumb items={[
        { title: breadCrumbName }
    ]}></Breadcrumb>;
};

export default BreadCrumbs;