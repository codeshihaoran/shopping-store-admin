import React, { useEffect, useState } from "react";
import './home.less'
import { Col, Row, Card, Space, Table, Tag, Tabs, Statistic } from 'antd';
import { TeamOutlined, AppstoreOutlined, ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import type { ColumnsType } from 'antd/es/table';

import TypoGraphy from "@/compentens/typography";
import axios from "axios";
interface DataType {
    key: string;
    name: string;
    phone: number;
    address: string;
    tag: string;
}
const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tag',
        key: 'tag',
        dataIndex: 'tag',
        render: (text) => <Tag color={"green"} style={{ fontWeight: '400', fontSize: '14px', height: '25px', lineHeight: '25px' }}>
            {text}
        </Tag>
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Space size="middle">
                <a>删除订单</a>
                <a>提醒支付</a>
            </Space>
        ),
    },
]
const items = [
    {
        key: '1', label: '商品总览', values: <Row gutter={16}>
            <Col span={12}>
                <Card bordered={false}>
                    <Statistic
                        title="全部商品"
                        value={20}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card bordered={false}>
                    <Statistic
                        title="库存紧张"
                        value={25}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                    />
                </Card>
            </Col>
        </Row>, icon: <AppstoreOutlined />
    },
    {
        key: '2', label: '用户总览', values: <Row gutter={16}>
            <Col span={12}>
                <Card bordered={false}>
                    <Statistic
                        title="用户新增"
                        value={56}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                    />
                </Card>
            </Col>
            <Col span={12}>
                <Card bordered={false}>
                    <Statistic
                        title="用户总量"
                        value={300}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<ArrowDownOutlined />}
                    />
                </Card>
            </Col>
        </Row>, icon: <TeamOutlined />
    }
]
const Home = () => {
    const [orderSale, SetOrderSale] = useState({
        salePrice: 0,
        saleSum: 0,
        userSum: 0
    })
    const [data, setData] = useState([])
    useEffect(() => {
        axios.post('/api/admin/order/sale/get').then(res => {
            if (res.data.code === '001') {
                const { userSum, saleSum, salePrice } = res.data;
                const List = res.data.pendingList
                SetOrderSale({ userSum, saleSum, salePrice })
                setData(List)
                console.log(data);
            }
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className="home">
            <div className="view-main">
                <div className="dash-board">
                    <span className="span-style">后台数据</span>
                    <Row gutter={16} style={{ margin: '20px 0px' }}>
                        <Col span={8}>
                            <Card title="订单数量" bordered={false} style={{ border: '1px solid lightblue', paddingRight: '20px' }} >
                                {orderSale.saleSum}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="销售总额" bordered={false} style={{ border: '1px solid lightblue', paddingRight: '20px' }}>
                                {orderSale.salePrice}
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="新增用户" bordered={false} style={{ border: '1px solid lightblue', paddingRight: '20px' }}>
                                {orderSale.userSum}
                            </Card>
                        </Col>
                    </Row>
                    <span className="span-style">待办事务</span>
                    <Table columns={columns} dataSource={data} style={{ margin: '20px 0px 0px' }} />
                    <Tabs
                        defaultActiveKey="1"
                        centered
                        style={{ marginBottom: '40px' }}
                        items={items.map((item) => {
                            return {
                                label: item.label,
                                key: item.key,
                                children: item.values,
                                icon: item.icon
                            }
                        })}
                    />
                    <TypoGraphy />
                </div>
            </div>
        </div >
    )
}
export default Home