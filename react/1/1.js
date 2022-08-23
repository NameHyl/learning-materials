console.time("for")

let arr = ["Sara", "Cahal", "Edite"];
let arr1 = ["Sara", "Cahal", "Edite"];
let arr4 = [1, 2, 3, 4, 5, 6];
// 时间处理函数
function DateFormat(data, format = "yyyy-MM-dd HH:mm:ss") {
    let config = {
        yyyy: data.getFullYear(),
        MM: data.getMonth() + 1,
        dd: data.getDate(),
        HH: data.getHours(),
        mm: data.getMinutes(),
        ss: data.getSeconds()
    };
    for (const key in config) {
        format = format.replace(key, config[key]);
    }
    return format;
}
let date = new Date();
console.log(DateFormat(date));
// 最大值
console.log(Math.max.apply(null, arr4));
// 类型判断：typeof:无法判断对象和数组（object）
// 类型判断：变量 instanceof 类型： 
// 统计出现次数
function Count(array, num) {
    return array.reduce((total, cur) => {
        return total += (num == cur ? 1 : 0);
    }, 0)
}
console.log(Count([1, 2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1], 1));
// reduce的过滤
function Count1(array, num) {
    return array.reduce((total, cur) => {
        if (cur >= num) total.push(cur)
        return total
    }, [])
}
console.log(Count1([1, 2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1], 2));
// 迭代器的使用
for (const val of arr1.entries()) {
    console.log(val);
}
for (const val of arr1.entries()) {
    let obj = {}
    obj[val[0]] = val[1]
    console.log(
        Object.assign({ name: "hyl" }, obj)
    );
}
for (const val of arr1.values()) {
    console.log(val);
}
for (const val of arr1.keys()) {
    console.log(val);
}

// from的使用
Array.from(arr1, function (items) {
    console.log(items);
})
// includes返回布尔值
console.log(arr1.includes("Sara"));
// indexOf第二个参数是从第几个开始找
console.log(arr1.indexOf("Sara", 1));
// 复制
console.log(arr1.copyWithin(1, 0, 3))
// of的使用
let lesson = Array.of(3);
console.log(lesson);
let arr2 = [1, 4, 32, 4, 51, 6, 7, 8, 91]
// sort:排序
arr2.sort((a, b) => a - b)
// 小-》大
console.log(arr2);
// 大-》小
arr2.sort((a, b) => b - a)
console.log(arr2);
// Reduce
function reduce(...args) {
    return args.reduce((a, b) => {
        return (a += b)
    }, 1)
}
console.log(reduce(9, 10));
function Welcome(props) {
    return <h1 onClick={(e) => {
        // toggle：切换classname
        console.log(e.target.classList.toggle("hide"));
    }}>Hello, {props.name}---------------{DateFormat(date)}</h1>;
}

function App() {
    return (
        <div>
            {
                arr.map(item => {
                    return (
                        <Welcome key={item} name={item} />
                    )
                })
            }

        </div>
    );
}
console.timeEnd("for")
const app = document.querySelector('#app');
const element = <App />;
ReactDOM.render(element, app);