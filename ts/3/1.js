// 1.
// class User{
//     // public :公开的
//     public name:string
//     // protected :受保护的==>在内部可以调用，外部不行，可继承
//     protected age:number
//     // private:私有的
//     private email:string
//     // readonly:只读的
//     protected readonly site:string="www.baidu.com"
//     // static :静态的==>不可以被实例化调用
//     static phone:string="Phone"
//     constructor(name:string, age:number,site?:string){
//         this.name = name;
//         this.age = age;
//         this.site=site||this.site
//     }
//    public getUrl(url:string){
//         console.log(`请求的是${this.site}\\${url}`);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     }
// }
// const url=new User("hyla",22,"www");
// const url1=new User("hyla",22);
// url1.getUrl("url")
// const h=new User("hyla",22);
// const y=new User("hyl",22);
// const list:User[] = [];
// list.push(h,y);
/*
    2.theSingleton模式
 */
// class Singleton{
//     private static instance:Singleton|null = null;
//     static make():Singleton{
//         if(Singleton.instance==null){
//             console.log("Singleton");
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
// }
// // 指向一个实例==>单例模式
// Singleton.make();
// Singleton.make();
// Singleton.make();
// Singleton.make();
/*
    3.get set ==>可以对数据进行处理
 */
// {
//     class Art{
//         private list:string[]
//         public get arts():string[]{
//             let sum:string="";
//             this.list.map(item=>{
//                sum+=item
//            })
//            return sum.split("")
//         }
//         public set arts(list:string[]){
//              this.list =list
//         }
//     }
//     const a=new Art();
//     a.arts=["hyla","shi"];
//     console.log(a.arts);
// }
/*
    4.抽象类==>不可以被实例化，相当于一种规范
    5.接口==>相当于一种规范，可以用于多种场景
 */
{
    var b = {
        big: "big",
        sex: "sex"
    };
    console.log(b);
    // 抽象类
    var Father = /** @class */ (function () {
        function Father() {
        }
        return Father;
    }());
    var Son = /** @class */ (function (_super) {
        __extends(Son, _super);
        function Son() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "haha";
            return _this;
        }
        Son.prototype.move = function () {
            console.log("gagag");
        };
        return Son;
    }(Father));
    var a = new Son();
}
