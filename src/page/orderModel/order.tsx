import React, { useEffect, useState } from "react";
import './order.less'
import { Checkbox, Button } from "antd";
import axios from "axios";
import { order } from "@/type/order";
const Order = () => {
    const [orderList, setOrderList] = useState([])
    const [searchValue, setSearchValue] = useState(
        {
            orderNum: '',
            receiver: '',
            payStatus: '',
            orderTime: ''
        }
    )
    useEffect(() => {
        axios.post('/api/admin/order/get').then(res => {
            setOrderList(res.data.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])
    const getChangeValue = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target
        setSearchValue((val) => ({
            ...val,
            [name]: value
        }))
    }
    const clearValue = () => {
        setSearchValue({
            orderNum: '',
            receiver: '',
            payStatus: '',
            orderTime: ''
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
                            <input type="text" onChange={getChangeValue} value={searchValue.orderNum} name="orderNum" />
                            <span className="search-span">收货人：</span>
                            <input type="text" onChange={getChangeValue} value={searchValue.receiver} name="receiver" />
                        </div>
                        <div className="search-main">
                            <span>支付状态：</span>
                            <select value={searchValue.payStatus} onChange={getChangeValue} name="payStatus">
                                <option value="请选择">请选择</option>
                                <option value="paid">已支付</option>
                                <option value="pending">待支付</option>
                                <option value="canceled">已取消</option>
                            </select>
                            <span className="search-span">下单时间：</span>
                            <input type="datetime-local" onChange={getChangeValue} value={searchValue.orderTime} name="orderTime" />
                            <div className="btn">
                                <button className="search-btn">查询</button>
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
                                <div className="header-info order-price">订单金额</div>
                                <div className="header-info order-name">用户姓名</div>
                                <div className="header-info order-phone">联系方式</div>
                                <div className="header-info order-address">用户地址</div>
                                <div className="header-info order-time">创建时间</div>
                                <div className="header-info order-status">订单状态</div>
                                <div className="header-info order-action">操作</div>
                            </li>
                            {orderList.map((item: order) => <li key={item.id} className="order-list">
                                <div className="header-info order-checkout"><Checkbox></Checkbox></div>
                                <div className="header-info order-number">{item.order_id}</div>
                                <div className="header-info order-title">{item.product_title}</div>
                                <div className="header-info order-num">{item.product_num}</div>
                                <div className="header-info order-price">{item.product_price * item.product_num}</div>
                                <div className="header-info order-name">{item.user_name}</div>
                                <div className="header-info order-phone">{item.user_phone}</div>
                                <div className="header-info order-address">甘肃省安宁区</div>
                                <div className="header-info order-time">{item.order_time}</div>
                                <div className="header-info order-status">已支付</div>
                                <div className="header-info order-action"><Button>查看</Button></div>
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