import React, { useRef } from 'react'
import './login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setUser } from '@/store/modules/user';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userNameRef = useRef()
    console.dir(userNameRef.current)
    const login = () => {
        const data = {
            userName: 'shr481934',
            password: 'aaaa8888'
        }
        console.log(data);
        axios.post(
            'api/users/login',
            data
        ).then(res => {
            console.log(res.data);
            if (res.data.code === '001') {
                console.log(res.data);
                // 将返回的id保存到redux
                dispatch(setUser(res.data.user))
                // 跳转到首页
                navigate('/')
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
                            <input className="input100" />
                            <span className="focus-input100" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input100 validate-input">
                            <input className="input100" />
                            <span className="focus-input100" data-placeholder="Password"></span>
                        </div>

                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
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