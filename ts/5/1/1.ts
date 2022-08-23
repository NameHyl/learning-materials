// {
//     // 装饰器 ClassDecorator:类装饰器 MethodDecorator
//     function decorator(target: object){}
//     @decorator
//     class Hyl{}
// }
// {
//     // 装饰器:可以叠加
//     const move:ClassDecorator =(target:Function)=>{
//         target.prototype.name = "hyla"
//     }
//     const theSuperposition:ClassDecorator =(target:Function)=>{
//         target.prototype.age = 22 
//     }
//     @move
//     @theSuperposition
//     class Hyl{}
//     @move
//     class Hyla{}
//     const a=new Hyl();
//     console.log((a as any).name);
//     console.log((<any>a).name);
    
//     console.log((<any>a).age);
// }
// {
//     // 装饰器工厂
//     const Factory=(type:string):ClassDecorator=>{
//         return (target:Function)=>{
//             target.prototype.name=type
//         }
//     }
//     @Factory("hylshidashuaige")
//     class Hyl{}
//     let a=new Hyl()
//     console.log((a as any).name);
    
// }
// {
//     const attr:MethodDecorator=(...val:any[])=>{
//         // 此处应该有三个参数
//         console.log(val[0]); //{} ：原型对象|静态方法
//         console.log(val[1]); //show :方法名称
//         console.log(val[2]); // 方法描述==>/* {value: [Function: show],  writable: true,enumerable: false,configurable: true} */
//     }
//     class Hyla{
//         @attr
//         public show(){
//             console.log("show")
//         }
//     }

// }
// {
//     // 延迟执行
//     const arr:MethodDecorator=(...arg:any[])=>{
//         const method=arg[2].value
//         arg[2].value=()=>{
//             setTimeout(()=>{
//                 method()
//             },2000)
//         }
//     }

//     class Hyla{
//         @arr
//         public show(){
//             console.log("show");
//         }
//     }
//     new Hyla().show();
// }
// {
//     // 延迟执行=换种写法
//     const arr=(timer:number):MethodDecorator=>{
//         return (...arg:any[])=>{
//             const method=arg[2].value
//             arg[2].value=()=>{
//                 setTimeout(()=>{
//                     method()
//                 },timer)
//             }
//         }
//     }

//     class Hyla{
//         @arr(3000)
//         public show(){
//             console.log("show");
//         }
//     }
//     new Hyla().show();
// }

// {
//     // 自定义错误
//     const Errors:MethodDecorator=(...args:any[])=>{
//         const method=args[2].value
//         args[2].value=()=>{
//             try{
//                 method()
//             }catch(error){
//                 console.log("cuowu");
//                 console.log(`%c${error}`,'color:red;font-size:22px;');
//             }
//         }
//     }
//     class Hyl{
//         @Errors
//         public show(){
//             throw new Error("出错误了")
//         }
//     }
//     new Hyl().show();
// }

// {
//     // 定义未登录跳转
//     const user={
//         name: "user",
//         isLogin: true
//     }
//     const Login:MethodDecorator=(...args:any[])=>{
//         const method=args[2].value;
//         args[2].value=()=>{
//             if(user.isLogin===true){
//                 return method();
//             }
//             alert("没有登陆")
//         }
//     }
//     class User{
//         public show(){
//             console.log("show");
//         }
//         @Login
//         store(){
//            console.log("login successful");
//         }
//     }
//     new User().store()
// }

// {
//     // 自定义接口请求参数
//     const facths=(url:string):MethodDecorator => {
//         return (...args:any[])=>{
//             const method=args[2].value;
//             // 请求模拟
//             new Promise<any[]>((resolve, reject)=>{
//                 // 获得数据
//                 setTimeout(()=>{
//                     resolve([{name:"haha"},{name:"hyla"}])
//                 },2000)
//             }).then((data:any[])=>{ //传递数据
//                 method(data)
//             })
//         }
//     }
//     class User{
//         @facths("htts://")
//         show(data:any[]){
//             console.log(data);
//         }
//     }
// }

// {
//     // 属性装饰器
//     const Radomcolor:PropertyDecorator=(target: Object, propertyKey:string | symbol)=>{
//         const color:string[]=["red", "green", "yellow", "skyblue","orange"];
//         Object.defineProperty(target, propertyKey,{
//             get(){
//                 return color[Math.floor(Math.random()*color.length)]
//             }
//         })
//     }   
//     class User{
//         @Radomcolor
//         public colos:string|undefined

//         show(){
//             document.body.innerHTML=`<div style='color:${this.colos}'>hahhaha</div>`
//         }
//     }
//     new User().show()
// }