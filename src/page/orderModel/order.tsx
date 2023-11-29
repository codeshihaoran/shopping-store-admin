import React from "react";
import './order.less'
const Order = () => {


    return (
        <div className="order">
            <div className="view-main">
                <div className="header">
                    <h1>订单管理</h1>
                </div>
                <div className="search-container">
                    <div className="serach-top">
                        <span>订单编号：</span>
                        <input type="text" />
                        <span className="search-span">收货人：</span>
                        <input type="text" />
                    </div>
                    <div className="search-main">
                        <span>支付状态：</span>
                        <select>
                            <option value="paid">已支付</option>
                            <option value="pending">待支付</option>
                            <option value="canceled">已取消</option>
                            <option value="pendingService">待服务</option>
                        </select>
                        <span className="search-span">下单时间：</span>
                        <input type="datetime-local" />
                        <div className="btn">
                            <button className="search-btn">查询</button>
                            <button className="reset-btn">重置</button>
                        </div>
                    </div>
                    <button className="export-btn">导出</button>
                </div>
            </div>
        </div>
    )
}
export default Order