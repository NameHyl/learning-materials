import React from 'react'
// yarn add react-router-dom@6
import { BrowserRouter, Link, Routes, Route, HashRouter } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Login from "./Login"
export default function Router() {
    return (
        // 这是两种跳转方式
        // <HashRouter></HashRouter>
        <BrowserRouter>
            <Link to="/home">首页</Link>
            <Link to="/about">关于</Link>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
