import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Login from "./Login"
import NotPage from "./notPage"
export default function TwoLuYou() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Login />}></Route>
                    <Route path="about" element={<About />}></Route>
                </Route>
                {/* 所有错误的路径 404 no find */}
                <Route path="*" element={<NotPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
