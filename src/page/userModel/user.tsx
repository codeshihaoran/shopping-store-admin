import React from "react";
import './user.less'
const User = () => {
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
                    <ul className="user-list">
                        <li className="user-item">
                            <div className="user-value">xxxx</div>
                            <div className="user-value">xxxx</div>
                            <div className="user-value">1234567890</div>
                            <div className="user-value">xxxx</div>
                            <div className="user-value">
                                <button className="view-orders-btn">View Orders</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default User