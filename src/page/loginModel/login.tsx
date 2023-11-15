import React, { useState } from 'react'
import './login.less'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setUser } from '@/store/modules/user';
import { notification } from 'antd'
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [errUserMessage, setUserErrMessage] = useState('')
    const [errPassMessage, setPassErrMessage] = useState('')
    const [api, contextHolder] = notification.useNotification();
    const [inputUserName, setInputUserName] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const getUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputUserValue = event.target.value
        if (inputUserValue === '') {
            setUserErrMessage('请输入用户名')
        } else {
            const userNameRule = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
            if (userNameRule.test(inputUserValue)) {
                setUserErrMessage('')
            } else {
                setUserErrMessage('字母开头,长度5-16之间,允许下划线')
            }

        }
        setInputUserName(inputUserValue)
    }
    const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputPassValue = event.target.value
        if (inputPassValue === '') {
            setPassErrMessage('请输入密码')
        } else {
            const passwordRule = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
            if (passwordRule.test(inputPassValue)) {
                setPassErrMessage('')
            } else {
                setPassErrMessage('字母开头,长度5-16之间,允许下划线')
            }
        }
        setInputPassword(inputPassValue)
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
                            <input className="input100 has-val" value={inputUserName} onChange={getUserName} onBlur={getUserName} />
                            <span className="focus-input100" data-placeholder="Email"></span>
                        </div>
                        <div className='input-view'>{errUserMessage}</div>

                        <div className="wrap-input100 validate-input">
                            <input className="input100 has-val" value={inputPassword} onChange={getPassword} onBlur={getPassword} />
                            <span className="focus-input100" data-placeholder="Password" ></span>
                        </div>
                        <div className='input-view'>{errPassMessage}</div>
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