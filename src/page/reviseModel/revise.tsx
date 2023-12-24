import React, { useEffect, useState } from "react";
import './revise.less'
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { message } from "antd"
const Revise = () => {
    const navigate = useNavigate()
    const [params] = useSearchParams()
    let product_id = params.get('productId')
    const data = {
        productId: product_id
    }
    useEffect(() => {
        axios.post('/api/product/details/get', data).then(res => {
            console.log(res.data.product);
            const product = res.data.product
            setInputValues({
                input1: product[0].product_name,
                input2: product[0].product_price,
                input3: product[0].product_num,
                input4: product[0].product_selling_price,
            })
        })
    }, [])
    const [inputValues, setInputValues] = useState({
        input1: '', // 修改的商品名称
        input2: '', // 修改的商品价格
        input3: '', // 修改的商品数量
        input4: '', // 修改的优惠价
    })
    const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setInputValues((val) => ({
            ...val,
            [name]: value
        }))
    }
    const submitData = () => {
        const Data = {
            productId: product_id,
            productInfo: inputValues
        }
        axios.post('/api/product/prodctInfo/revise', Data).then(res => {
            if (res.data.code === '001') {
                navigate(`/action?productId=${product_id}`)
                message.success(res.data.message)
            }
            if (res.data.code === '004') {
                message.error(res.data.message)
            }
        }).catch(err => {
            console.log(err);

        })
    }
    return (
        <div className="revise">
            <div className="view-main">
                <header className="revise-header">
                    <h1 className="revise-h1">修改商品信息</h1>
                </header>

                <section className="product-form-revise">
                    <form>
                        <div className="revise-form-group">
                            <label htmlFor="productName">商品名称</label>
                            <input type="text" id="productName" onChange={getInputValue} value={inputValues.input1} name="input1" placeholder="输入商品名称" required />
                        </div>

                        <div className="revise-form-group">
                            <label htmlFor="productPrice">商品价格</label>
                            <input id="productPrice" name="input2" onChange={getInputValue} value={inputValues.input2} placeholder="输入商品价格" required />
                        </div>

                        <div className="revise-form-group">
                            <label htmlFor="productQuantity">商品数量</label>
                            <input type="number" id="productQuantity" name="input3" onChange={getInputValue} value={inputValues.input3} placeholder="输入商品数量" required />
                        </div>

                        <div className="revise-form-group">
                            <label htmlFor="productDescription">商品优惠</label>
                            <input type="number" id="productDescription" name="input4" onChange={getInputValue} value={inputValues.input4} placeholder="输入商品描述" required />
                        </div>
                        <button type="button" className="update-button" onClick={() => submitData()}>更新商品信息</button>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default Revise