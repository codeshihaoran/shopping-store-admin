import React, { useState } from 'react'
import './login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setUser } from '@/store/modules/user';
import { notification } from 'antd'
const Login = () => {
    const [api, contextHolder] = notification.useNotification();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [inputUserName, setInputUserName] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const getUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputUserName(event.target.value)
        console.log(inputUserName);

    }
    const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassword(event.target.value)
        console.log(inputPassword);

    }
    const login = () => {
        const data = {
            userName: inputUserName,
            password: inputPassword
        }
        console.log(data);
        axios.post(
            'api/users/login',
            data
        ).then(res => {
            switch (res.data.code) {
                case '001':
                    // 将返回的id保存到redux
                    dispatch(setUser(res.data.user))
                    // 跳转到首页
                    navigate('/')
                    break;
                case '002':
                    api['error']({
                        message: `错误码：${res.data.code}`,
                        description: `错误信息：${res.data.msg}`,
                    });
                    break
                case '004':
                    api['error']({
                        message: `错误码：${res.data.code}`,
                        description: `错误信息：${res.data.msg}`,
                    });
                    break
            }
        }).catch((err) => {
            console.log(err);
        })

    }

    return (

        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            请登录
                        </span>

                        <div className="wrap-input100 validate-input">
                            <input className="input100 has-val" value={inputUserName} onChange={getUserName} />
                            <span className="focus-input100" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input100 validate-input">
                            <input className="input100 has-val" value={inputPassword} onChange={getPassword} />
                            <span className="focus-input100" data-placeholder="Password" ></span>

                        </div>

                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                {contextHolder}
                                <button className="login100-form-btn" type='button' onClick={() => login()}>
                                    Login
                                </button>
                            </div>
                        </div>

                        <div className="bottom">
                            <span className="txt1">
                                Please log in to the administrator account！
                            </span>

                            <a className="txt2">
                                Help
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login