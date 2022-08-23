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
    // 接口
    interface Fn{
        big: string;
        // 后边可以跟更多的类型数据
        [key:string]: any;
    }
    const b:Fn={
        big:"big",
        sex:"sex"
    }
    console.log(b);
    
    // 抽象类
    abstract class Father{
         // abstract继承模板
        abstract name:string;
        abstract move():void;
    }
    class Son extends Father{
        public name:string="haha"
        public move():void{
            console.log("gagag");
        }
    }
    let a=new Son()
    
}
