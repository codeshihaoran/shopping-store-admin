import React, { useEffect, useState } from "react";
import './order.less'
import { Checkbox, Button } from "antd";
import axios from "axios";
import { order } from "@/type/order";
import { Status } from "@/type/status";
import { useNavigate } from "react-router-dom";
import { Empty } from 'antd';
const Order = () => {
    const [orderList, setOrderList] = useState([])
    const [searchValue, setSearchValue] = useState(
        {
            orderId: '',
            receiver: '',
            payStatus: 1,
            orderTime: ''
        }
    )
    const [searchData, setSearchData] = useState()
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        axios.post('/api/admin/order/get').then(res => {
            setOrderList(res.data.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])
    const getStatuOption = (order_status: Status) => {
        switch (order_status) {
            case Status.WaitPay:
                return '等待中';
            case Status.Success:
                return '已支付';
            case Status.Cancel:
                return '已取消';
            default:
                return '未知状态';
        }
    }
    const getChangeValue = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target
        setSearchValue((val) => ({
            ...val,
            [name]: value
        }))
        console.log(searchValue);
    }
    const clearValue = () => {
        setSearchValue({
            orderId: '',
            receiver: '',
            payStatus: 1,
            orderTime: ''
        })
    }
    const inquireOrderInfo = () => {
        const data: { [key: string]: string | number } = {}
        for (const key in searchValue) {
            // 使用hasOwnProperty()方法确保只遍历对象自身属性
            if (searchValue.hasOwnProperty(key)) {
                const value = searchValue[key];
                if (value !== '') {
                    data[key] = value
                }
            }
        }
        console.log(data);
        axios.post('/api/admin/order/search', data).then(res => {
            if (res.data.code === '001') {
                setFlag(false)
                setOrderList(res.data.searchOrderInfo)
            } else {
                setFlag(true)
            }
            console.log(searchData);

        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="order">
            <div className="view-main">
                <div className="order-main">
                    <div className="header">
                        <h1>订单管理</h1>
                    </div>
                    {/* 订单查询 */}
                    <div className="search-container">
                        <div className="serach-top">
                            <span>订单编号：</span>
                            <input type="text" onChange={getChangeValue} value={searchValue.orderId} name="orderId" />
                            <span className="search-span">收货人：</span>
                            <input type="text" onChange={getChangeValue} value={searchValue.receiver} name="receiver" />
                        </div>
                        <div className="search-main">
                            <span>支付状态：</span>
                            <select value={searchValue.payStatus} onChange={getChangeValue} name="payStatus">
                                <option value="请选择">请选择</option>
                                <option value="1">已支付</option>
                                <option value="0">待支付</option>
                                <option value="2">已取消</option>
                            </select>
                            <span className="search-span">下单时间：</span>
                            <input type="datetime-local" onChange={getChangeValue} value={searchValue.orderTime} name="orderTime" />
                            <div className="btn">
                                <button className="search-btn" onClick={inquireOrderInfo}>查询</button>
                                <button className="reset-btn" onClick={clearValue}>重置</button>
                            </div>
                        </div>
                        <button className="export-btn">更多</button>
                    </div>
                    {/* 订单表格 */}
                    <div className="order-view">
                        <ul>
                            <li className="order-header">
                                <div className="header-info order-checkout"><Checkbox></Checkbox></div>
                                <div className="header-info order-number">订单编号</div>
                                <div className="header-info order-title">商品标题</div>
                                <div className="header-info order-num">订单数量</div>
                                <div className="header-info order-price">支付状态</div>
                                <div className="header-info order-name">用户姓名</div>
                                <div className="header-info order-phone">联系方式</div>
                                <div className="header-info order-address">用户地址</div>
                                <div className="header-info order-time">下单时间</div>
                                <div className="header-info order-action">操作</div>
                            </li>
                            {flag === true ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> : orderList.map((item: order) => <li key={item.id} className="order-list">
                                <div className="header-info order-checkout"><Checkbox></Checkbox></div>
                                <div className="header-info order-number">{item.order_id}</div>
                                <div className="header-info order-title">{item.product_title}</div>
                                <div className="header-info order-num">{item.product_num}</div>
                                <div className="header-info order-price">{getStatuOption(item.order_status)}</div>
                                <div className="header-info order-name">{item.user_name}</div>
                                <div className="header-info order-phone">{item.order_phone}</div>
                                <div className="header-info order-address">{item.order_address}</div>
                                <div className="header-info order-time">{item.order_time}</div>
                                <div className="header-info order-action"><Button onClick={() => navigate(`/details?order_id=${item.order_id}`)}>查看</Button></div>
                            </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order