import React, { useEffect, useState } from "react";
import './product.less'
import axios from "axios";
import { Checkbox, Button } from "antd";
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useNavigate } from "react-router-dom";
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
const Product = () => {
    const [productData, setProductData] = useState([])
    const navigate = useNavigate()
    const Data = {
        categoryId: 0,
        currentPage: 1,
        pageSize: 15
    }
    const isALLCheck = (e: CheckboxChangeEvent) => {

    }
    const isCheck = (e: CheckboxChangeEvent) => {

    }
    useEffect(() => {
        axios.post(
            'api/product/allProduct/get',
            Data
        ).then(res => {
            setProductData(res.data.products)
        }).catch((err) => {
            console.log(err);
        })

    }, [])
    console.log('productInfo: ', productData);

    return (
        <div className="product">
            <div className="view-main">
                <div className="content">
                    <ul>
                        {/*  商品列表表头 */}
                        <li className="header">
                            {/* 全选按钮 */}
                            <div className="pro-check">
                                <Checkbox onChange={isALLCheck}></Checkbox>
                            </div>

                            <div className="pro-img"></div>
                            <div className="pro-name">商品名称</div>
                            <div className="pro-price">单价</div>
                            <div className="pro-num">剩余量</div>
                            <div className="pro-sell">优惠价</div>
                            <div className="pro-action">操作</div>
                        </li>
                        {/* 商品列表 */}
                        {productData.map((item: ProductData) =>
                            <li key={item.product_id} className="product-list">
                                <div className="pro-check">
                                    <Checkbox onChange={isCheck}></Checkbox>
                                </div>
                                <div className="pro-img">
                                    <img src={item.product_picture} alt="" />
                                </div>
                                <div className="pro-name">{item.product_name}</div>
                                <div className="pro-price">{item.product_price}</div>
                                <div className="pro-num">{item.product_num}</div>
                                <div className="pro-sell">{item.product_selling_price}</div>
                                <div className="pro-action">
                                    <Button onClick={() => navigate(`/action?productId=${item.product_id}`)}>更多操作</Button>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Product