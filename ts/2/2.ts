// 1.定义类型
type usetype={name:string,age:number,sex?:string|number}
type useFn=(user:usetype)=>number
let addData:useFn=(user:usetype):number=>{
    return 1
}
let upData:useFn=(user:usetype):number=>{
    return 2
}
addData({name:"user",age:12})
upData({name:"user",age:12,sex:"nan"})
// 2.类似元组
let tuple:[string,boolean,number]=["1",true,2];
// 3.Enum 不设置值时，值以0开始递增
enum Sextype{
    BOY=1,
    GIRL=2
}
let user={
    name:"user",
    sex:1
}
console.log(Sextype.GIRL);
// 4.断言 as const:根据具体的值转化类型
// let a=<const>"11"
// 5.非空断言 as 确定类型或者!

