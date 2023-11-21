import React from "react";
import './add-product.less'
const Addproduct = () => {
    return (
        <div className="addProduct">
            <div className="view-main">
                <div className="form-container animated fadeInDown ">
                    <h1>添加商品</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="productId">商品ID:</label>
                            <input type="number" id="productId" name="productId" placeholder="输入商品ID" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productName">商品名称:</label>
                            <input type="text" id="productName" name="productName" placeholder="输入商品名称" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="categoryId">类别ID:</label>
                            <input type="number" id="categoryId" name="categoryId" placeholder="输入类别ID" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productTitle">商品标题:</label>
                            <input type="text" id="productTitle" name="productTitle" placeholder="输入商品标题" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productIntro">商品介绍:</label>
                            <input type="text" id="productIntro" name="productIntro" placeholder="输入商品介绍" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productPicture">商品图片 URL:</label>
                            <input type="text" id="productPicture" name="productPicture" placeholder="输入商品图片 URL" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">商品价格:</label>
                            <input type="number" id="productPrice" name="productPrice" placeholder="输入商品价格" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productSellingPrice">商品优惠价:</label>
                            <input type="number" id="productSellingPrice" name="productSellingPrice" placeholder="输入商品优惠价" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productNum">商品剩余量:</label>
                            <input type="number" id="productNum" name="productNum" placeholder="输入商品剩余量" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productSales">商品销价:</label>
                            <input type="number" id="productSales" name="productSales" placeholder="输入商品销量" required />
                        </div>
                        <button type="submit" className="add-button">添加商品</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Addproduct