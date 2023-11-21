import React, { useEffect, useState } from "react"
import './action.less'
import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios"
import { ProductData } from "@/type/index"
import { message } from "antd"
const Action = () => {
    const [productData, setProductData] = useState([])
    const [params] = useSearchParams()
    const navigate = useNavigate()
    let product_id = params.get('productId')
    const data = {
        productId: product_id
    }
    console.log('product_id: ', product_id);
    useEffect(() => {
        axios.post('api/product/details/get',
            data
        ).then(res => {
            setProductData(res.data.product)
        }).catch(err => {
            console.log(err);
        })
    }, [])
    const deleteProduct = (productID: number) => {
        const data = {
            productId: productID
        }
        axios.post('/api/product/delete',
            data
        ).then(res => {
            if (res.data.code === '001') {
                navigate('/product')
                message.success(res.data.message)
            } else {
                message.error('好像出问题了...');
            }
        }).catch(err => {
            console.log(err);

        })
    }
    return (
        <div className="action">
            <div className="view-main">
                {productData.map((item: ProductData) => <li key={item.product_id}>
                    <header>
                        <h1>{item.product_name}</h1>
                        <p>{item.product_intro}</p>
                    </header>

                    <section className="product-details">
                        <div className="product-image">
                            <img src={item.product_picture} />
                        </div>
                        <div className="product-info">
                            <p className="price">商品单价：<span>{item.product_price}</span></p>
                            <p className="availability">剩余量：<span>{item.product_num}</span></p>
                            <p className="discount">优惠价：<span>{item.product_selling_price}</span></p>
                            <button className="remove" onClick={() => deleteProduct(item.product_id)}>下架</button>
                            <button className="edit">修改</button>
                        </div>
                    </section>
                </li>)}

            </div>
        </div>
    )
}
export default Action