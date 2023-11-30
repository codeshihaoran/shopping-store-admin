import React from "react";
import './order.less'
import { Checkbox } from "antd";
const Order = () => {
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
                            <li className="order-list">
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order