import React, { useEffect } from 'react'
import '@/app.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function App() {
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('api/users/info').then(res => {
            console.log(res.data);
            if (res.data.code === '004') {
                navigate('/login')
            }
        }).catch(err => {
            console.log(err);

        })
    })
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">login</Link>
            </nav>
        </div>
    )
}
export default App
