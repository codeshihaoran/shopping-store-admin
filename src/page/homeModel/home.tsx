import React, { useEffect, useState } from "react";
import './home.less'
import { Col, Row, Card, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
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
                    <span>订单数据</span>
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
                    <span>待办事务</span>
                    <Table columns={columns} dataSource={data} style={{ margin: '20px 0px' }}
                        pagination={{
                            itemRender: (page, type, originalElement) => {
                                return (
                                    <div style={{ marginTop: '-8px' }}>
                                        {originalElement}
                                    </div>
                                )
                            }
                        }}
                    />
                </div>
            </div>
        </div >
    )
}
export default Home