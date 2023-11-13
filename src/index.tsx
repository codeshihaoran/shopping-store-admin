import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from '@/page/loginModel/login'
import { Provider } from 'react-redux';
import store from './store';
const root = document.getElementById('root');

if (root) {
    createRoot(root).render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
