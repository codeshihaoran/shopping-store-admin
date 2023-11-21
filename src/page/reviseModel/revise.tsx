import React from "react";
import './revise.less'
import { useSearchParams } from "react-router-dom";
const Revise = () => {
    const [params] = useSearchParams()
    let product_id = params.get('productId')
    console.log(product_id);
    const submitData = () => {

    }
    return (
        <div className="revise">
            <div className="view-main">
                <header>
                    <h1>修改商品信息</h1>
                </header>

                <section className="product-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="productName">商品名称</label>
                            <input type="text" id="productName" name="productName" placeholder="输入商品名称" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productPrice">商品价格</label>
                            <input type="number" id="productPrice" name="productPrice" placeholder="输入商品价格" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productQuantity">商品数量</label>
                            <input type="number" id="productQuantity" name="productQuantity" placeholder="输入商品数量" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productDescription">商品描述</label>
                            <textarea id="productDescription" name="productDescription" placeholder="输入商品描述" required></textarea>
                        </div>

                        <button type="submit" className="update-button" onClick={() => submitData()}>更新商品信息</button>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default Revise