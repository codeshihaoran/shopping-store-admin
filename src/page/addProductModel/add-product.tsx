import React, { useState } from "react";
import './add-product.less'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message, Button } from "antd";
const Addproduct = () => {
    // 产品数据
    const [inputValue, setInputValue] = useState({
        inputProductId: '', // 商品Id
        inputProductName: '', // 商品名称
        inputProductCateId: '', // 商品类名
        inputProductTitle: '', // 商品标题
        inputProductIntro: '', // 商品介绍
        inputProductPrice: '', // 商品价格
        inputProductSellingPrice: '', // 商品优惠价
        inputProductNum: '', // 商品数量
        inputProductSale: '' // 商品销价
    })
    // selectFile可以时File也可以是null类型
    const [selectFile, setSelectFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState()
    const navigate = useNavigate()
    // 上传照片事件
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // 可选链操作符？ 引用为null或undefined时，返回undefined
        const file = event.target.files?.[0];
        setSelectFile(file || null);
    }
    const sendImg = () => {
        const formData = new FormData()
        // 判断是否为文件 而不是为null
        if (selectFile instanceof File) {
            // 创建表单对象 
            formData.append('file', selectFile)
        }
        axios.post('/api/product/image/add', formData).then(res => {
            if (res.data.code === '001') {
                message.success(res.data.message)
                setImageUrl(res.data.path)
            }
        }).catch(err => {
            console.log(err);
        })
    }
    const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {

    }

    // 提交产品信息事件
    const submitData = () => {

    }

    return (
        <div className="addProduct">
            <div className="add-product view-main">
                <div className="form-container animated fadeInDown ">
                    <h1 className="addProduct-h1">添加商品</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="productId">商品ID:</label>
                            <input onChange={getInputValue} value={inputValue.inputProductId} type="number" name="inputProductId" placeholder="输入商品ID" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productName">商品名称:</label>
                            <input onChange={getInputValue} value={inputValue.inputProductName} type="text" name="inputProductName" placeholder="输入商品名称" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="categoryId">类别ID:</label>
                            <input onChange={getInputValue} value={inputValue.inputProductCateId} type="number" name="inputProductCateId" placeholder="输入类别ID" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productTitle">商品标题:</label>
                            <input onChange={getInputValue} value={inputValue.inputProductTitle} type="text" name="inputProductTitle" placeholder="输入商品标题" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productIntro">商品介绍:</label>
                            <input onChange={getInputValue} value={inputValue.inputProductIntro} type="text" name="inputProductIntro" placeholder="输入商品介绍" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productPicture">商品图片</label>
                            <input type="file" onChange={handleFileChange} required />
                            <Button type="primary" className="addImg-button" onClick={sendImg}>点击上传</Button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">商品价格:</label>
                            <input onChange={getInputValue} value={inputValue.inputProductPrice} type="number" name="inputProductPrice" placeholder="输入商品价格" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productSellingPrice">商品优惠价:</label>
                            <input onChange={getInputValue} value={inputValue.inputProductSellingPrice} type="number" name="inputProductSellingPrice" placeholder="输入商品优惠价" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="productNum">商品剩余量:</label>
                            <input onChange={getInputValue} value={inputValue.inputProductNum} type="number" name="inputProductNum" placeholder="输入商品剩余量" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productSales">商品销价:</label>
                            <input onChange={getInputValue} value={inputValue.inputProductSale} type="number" name="inputProductSale" placeholder="输入商品销量" required />
                        </div>
                        <button type="button" className="add-button" onClick={() => submitData()}>添加商品</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Addproduct