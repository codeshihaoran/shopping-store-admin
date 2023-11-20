import React, { useEffect, useState } from "react"
import './action.less'
import { useSearchParams } from "react-router-dom"
import axios from "axios"
interface ProductData {
    product_id: number
    product_name: string
    category_id: number
    product_title: string
    product_intro: string
    product_picture: string
    product_price: number
    product_selling_price: number
    product_num: number
    product_sales: number
}
const Action = () => {
    const [productData, setProductData] = useState([])
    const [params] = useSearchParams()
    let product_id = params.get('productId')
    const data = {
        productId: product_id
    }
    console.log('product_id: ', product_id);
    useEffect(() => {
        axios.post('api/product/details/get',
            data
        ).then(res => {
            console.log(res.data.product);
            setProductData(res.data.product)
        }).catch(err => {
            console.log(err);
        })
    })
    return (
        <div className="action">
            <div className="view-main">
                我是商品操作页
            </div>
        </div>
    )
}
export default Action