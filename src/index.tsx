import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux';
import store from './store';
const root = document.getElementById('root');


if (root) {
    createRoot(root).render(
        <Provider store={store}>
            <Router>
                <App></App>
            </Router>
        </Provider>

    )
}
