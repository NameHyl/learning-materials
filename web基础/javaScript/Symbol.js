const obj = { name: "hyla", age: 22 }
// 括号里边是描述
const my_name = Symbol("name")
// Symbol.for创建的会覆盖
const my_name2 = Symbol.for("name1")
const my_name3 = Symbol.for("name2")
obj[my_name] = "BOY"
obj[my_name2] = "BOY2"
obj[my_name3] = "BOY3"
console.log(obj);
// 得到Symbol
console.log(Object.getOwnPropertySymbols(obj));
// Symbol.for创建,可以通过这个来查询他的描述
console.log(Symbol.keyFor(my_name2));
console.log(Symbol.keyFor(my_name3));