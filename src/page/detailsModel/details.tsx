import React, { useEffect, useState } from "react";
import './details.less'
import { useSearchParams } from "react-router-dom";
import axios from "axios";
const Details = () => {
    const [params] = useSearchParams()
    const [orderDetails, setOrderDetails] = useState([])
    let order_id = params.get('order_id')
    const Data = {
        order_id: order_id
    }
    useEffect(() => {
        axios.post('/api/admin/order/details/get', Data).then(res => {
            setOrderDetails(res.data.orderDetails)
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <div className="details">
            <div className="view-main">
                <h1>订单详情页</h1>
            </div>
        </div>
    )
}
export default Details