// function handleClick(e, msg) {
//   console.log(e.target);
//   console.log(msg);
// }
// function App() {
//   return (
//     <>
//       <button onClick={(e) => handleClick(e, "messag")}>按钮</button>
//     </>
//   );
// }
import React from 'react';
// v4 as uuid：重新命名包的名字
// uuid是给一个唯一的值
import { v4 as uuid } from "uuid";
class App extends React.Component {
  handleClick() {
    // 解决函数里边调用this的情况
    console.log(this);
  }
  state = {
    arr: [
      {
        id: uuid(),
        name: "Hyla"
      }
    ]
  }
  render() {
    return (
      <>
        <div onClick={this.handleClick.bind(this)}>
          {this.state.arr[0].id}
        </div>
      </>
    )
  }
  // 
};
export default App;
