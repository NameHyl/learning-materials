import { useEffect, useState } from "react";

/*
    0.useRef的使用
    1.引入useRef
    2. const refs = useRef(null);
    3. 获取的对象上 使用属性ref={refs} 
    4.refs.current就是目标dom
*/
import { useRef } from "react";
// export default function Hooks() {
//     const refs = useRef(null);

//     function show() {
//         console.log(refs.current.getAttribute("name"));
//     }
//     return (
//         <div>
//             <div ref={refs} name="金色传说">池子</div>
//             <div onClick={show}>出货区</div>
//         </div >
//     )
// }

/*
    0.useContext使用
    // 1.引入createContext, useContext 
    // 2.在根组件使用  <Context.Provider value={data}>包裹组件</Context.provider>
    // 3.通过const val = useContext(Context)来调用使用
*/
import { createContext, useContext } from "react"
import { v4 as uuid } from "uuid"

// const Context = createContext();

// export default function Hooks() {
//     const data = "Hyal"
//     return (
//         <Context.Provider value={data}>
//             <Cum />
//         </Context.Provider>
//     )
// }

// function Cum() {
//     const val = useContext(Context)
//     console.log(val);
//     return (
//         <Cum1 />
//     )
// }
// function Cum1() {
//     const val = useContext(Context)
//     console.log(val);
//     return (
//         <div>{val}</div>
//     )
// }

/*
    0.
*/
export default function Hooks() {
    return (
        <div>Hooks</div>
    )
}
