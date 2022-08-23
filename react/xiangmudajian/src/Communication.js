/*
    communication
    // 父传子(类方式)
    1.拿到传入数据
    2.给子组件设置自定义属性：例如data
    3.通过proprs接收===>接收:this.props.data
    4.使用

    // 父传子(组件方式)
    1.得到数据
    2.给子组件设置自定义属性：例如data
    3.传入参数proprs
    4.通过结构的到数据 如：const { data } = props;
    5.使用
*/
import React from "react"
import { v4 as uuid } from "uuid"
// 1.类方式
// class Father extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.data[0].id}
//                 <br />
//                 {this.props.data[0].name}
//             </div>
//         )
//     }
// }
// class Communication extends React.Component {
//     state = {
//         data: [
//             {
//                 id: uuid(),
//                 name: "Hyla"
//             }
//         ]
//     }
//     render() {
//         return (
//             <>
//                 <Father data={this.state.data} />
//             </>
//         )
//     }
// }
// 2.组件方式
// function Father(props) {
//     const { data } = props;
//     console.log(data);
//     return (
//         <div>
//             {data.id}
//             <br />
//             {data.name}
//         </div>
//     )
// }
// function Communication() {
//     const data = { id: uuid(), name: "hyl" }
//     return (
//         <Father data={data} />
//     )
// }


/*
    // 子传父
    // 1.在父组件准备一个函数
    // 2.在父组件传入子组件==>通过自定义属性传
    // 3.在子组件函数通过props接收和解构
    // 4.在子组件某一刻执行该函数并且传入值
*/
import { useEffect, useState } from "react";
// function Communication() {
//     const getData = (data) => {
//         console.log(data);
//     }
//     return (
//         <Son getData={getData} />
//     )
// }

// function Son(props) {
//     const { getData } = props
//     // 这是某一刻执行传入
//     useEffect(() => {
//         getData(data)
//     }, [])
//     const data = { id: uuid(), name: "son" }
//     return (
//         <div>
//             {data.name}
//         </div>
//     )
// }

/*
    // 兄弟节点的通信
    // 1,子传父
    // 2.父传子
*/
// function Communication() {
//     const [sonData, setSonData] = useState("")
//     const getData = (data) => {
//         setSonData(data)
//     }
//     return (
//         <>
//             <Son1 getData={getData} />
//             <Son2 data={sonData} />
//         </>
//     )
// }

// function Son1(props) {
//     const { getData } = props
//     const data = { name: 'Son1', id: uuid() }
//     return (
//         <div onClick={() => getData(data)}>
//             son1
//         </div>
//     )
// }
// function Son2(props) {
//     const { data } = props;
//     const [val, setVal] = useState(null);
//     useEffect(() => {
//         setVal(data)
//     }, [data])
//     return (
//         <div>
//             son2+{val && val.name}
//         </div>
//     )
// }

/*
    // 跨组件通信
    // 1.根部组件 创建createContext对象
    // 2.使用解构=解构出提供者Provider和消费者Consumer
    // 3.使用提供者Provider包裹要传递的组件，使用属性value来传递要传递的值
    // 4.在需要的组件处使用Consumer组件包裹，使用函数的参数来接收参数
*/
import { createContext } from "react";
// 1.创建提供者和消费者  
// const { Provider, Consumer } = createContext();
// function Communication() {
//     const data = { id: uuid(), name: "Communication" }
//     return (
//         <>
//             <Provider value={data}>
//                 <Brother1 />
//                 <Brother2 />
//             </Provider>
//         </>
//     )
// }
// function Brother1() {
//     return (
//         <>
//             <Consumer>
//                 {value => value.id}
//             </Consumer>
//         </>
//     )
// }
// function Brother2() {
//     return (
//         <>
//             <div>brother2</div>
//             <Consumer>
//                 {value => value.name}
//             </Consumer>
//         </>
//     )
// }

/*
    0.这是父传子的延伸
    1.当自定义组件使用双标签，内部包裹任意数据时
    2.会在props中出现一个children属性
    3.children属性就是之前包裹的属性
*/
// function Communication() {
//     const data = { id: uuid(), name: "Communication" }
//     return (
//         <>
//             <Son>this is Child</Son>
//         </>
//     )
// }
// function Son(props) {
//     const { children } = props
//     return (
//         <div>
//             {children}
//         </div>
//     )
// }

/*
    // 1.组件检验规则
    1.安装检验包 yarn add prop-types
    2.导入包prop-types
    3.使用 组件名.propTypes={//定义规则 如：list:PropTypes.array ;这是list必须是数组的校验}
*/


/*
    1.设置props默认值 类组件的实现相对路径：
    r\2\public\1.png
*/


/*
    0.类组件的执行顺序
*/
class Communication extends React.Component {
    constructor() {
        super();
        console.log("1.继承");
    }
    render() {
        console.log("2.渲染");
        return (
            <>
                1
            </>
        )
    }
    // 生命周期
    componentDidMount() { //发送请求 dom操作
        console.log("3.挂载阶段");
    }
}
export default Communication;