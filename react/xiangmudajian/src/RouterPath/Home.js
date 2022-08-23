import React from 'react'
import { useSearchParams } from 'react-router-dom'

// 二级路由
import { Outlet } from 'react-router-dom';
export default function Home() {
    // const [params] = useSearchParams();
    // console.log(params.get("id"));
    return (
        <div>
            <ul>
                <li>home</li>
                <li>1</li>
                <li>1</li>
                <li><Outlet /></li>
            </ul>
        </div>
    )
}
