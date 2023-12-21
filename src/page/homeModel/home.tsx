import React, { useEffect, useState } from "react";
import './home.less'
import { Button, Col, Row, Statistic, Card } from 'antd';
import axios from "axios";
const Home = () => {
    const [orderSale, OrderSale] = useState({
        salePrice: 0,
        saleSum: 0,
        userSum: 0
    })
    useEffect(() => {
        axios.post('/api/admin/order/sale/get').then(res => {
            if (res.data.code === '001') {
                const { userSum, saleSum, salePrice } = res.data;
                OrderSale({ userSum, saleSum, salePrice })
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
                    <Row gutter={16} style={{ marginTop: '20px' }}>
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
                </div>
            </div>
        </div >
    )
}
export default Home