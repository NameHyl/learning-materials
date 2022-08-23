// 类似深拷贝
// 基本类型==>是每次创建一个变量，会开辟一个新的地址
let a = 123;
let b = a;
b = 1000;
console.log(a, b);
// 类似浅拷贝
// 引用类型==>赋值时，是指向引用地址，所有都会修改
let obj1 = { name: "name" }
let obj2 = obj1
obj2.name = "update-name"
console.log(obj1, obj2);
// 区别：深拷贝改变值不会对原来的数据影响，是全新的存储地址
// 浅拷贝，地址指向一样,但是对原数据没有影响

// 实现浅拷贝 concat slice Array.from() 扩展运算符 map reduce filter Object.assign
// 深拷贝 ：JSON.parse(JSON.stringify())