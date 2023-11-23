import React, { useEffect, useState } from "react";
import './user.less'
import axios from "axios";
import { UserInfo } from "@/type/user";
import { useNavigate } from "react-router-dom";
const User = () => {
    const navigate = useNavigate()
    const [allUserInfo, setAllUserInfo] = useState([])
    useEffect(() => {
        axios.post('/api/users/allUserInfo/get').then(res => {
            if (res.data.code === '001') {
                setAllUserInfo(res.data.allUserInfo)
            }
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className="user">
            <div className="view-main">
                <div className="user-container">
                    <div className="user-table-header">
                        <div className="table-cell">User ID</div>
                        <div className="table-cell">User Name</div>
                        <div className="table-cell">Phone Number</div>
                        <div className="table-cell">Address</div>
                        <div className="table-cell">Actions</div>
                    </div>
                    {/* 个人地址后续去做 需要配合store 填写地址后获取 */}
                    <ul className="user-list">
                        {allUserInfo.map((item: UserInfo) => <li key={item.user_id} className="user-item">
                            <div className="user-value">{item.user_id}</div>
                            <div className="user-value">{item.user_name}</div>
                            <div className="user-value">{item.user_phone}</div>
                            <div className="user-value">奥特曼帝国</div>
                            <div className="user-value">
                                <button className="view-orders-btn" onClick={() => navigate(`/order?userId=${item.user_id}`)}>个人订单</button>
                            </div>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default User