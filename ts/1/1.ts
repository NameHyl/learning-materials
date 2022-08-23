// yarn init -y
// cat package.json
// cat package.json  
// tsc 文件名 -w

//void 和never类型
// void:不具体返回值:返回null/undefined
// never:抛出异常
// function h():void {
//     throw new Error("xxxx")
// } 
// h()

// 未知类型
// let a:string="44";
// let b:number=a as unknown as number;
// console.log(b);

// type==>类似let var const属于定义，具有确定类型的作用

//组合类型
// 1.
// let arr:Array<string|number> =["a","b","c",1,"e","f","g","h","i"]
// 2.
// let arr:string|number
// arr=1
// arr="name"
// console.log(arr);

// ?可选可不选
// let obj:{name:string,age:number,url?:string};
// obj={name:"name",age:12}
// console.log(obj);


// let arr:(string|number|boolean)[]=["h",3,true]
// console.log(arr);


// function sum(a:number, b:number){
//     return a+b;
// }
// console.log(sum("1",2));


