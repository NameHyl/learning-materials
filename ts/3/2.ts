// interface UserInfo{
//     name:string,
//     age:number
// }
// class User{
//     info:UserInfo
//     constructor(user:UserInfo){
//         this.info=user;
//     }
//     get user():UserInfo{
//         this.info.name=this.info.name.toUpperCase()
//         return this.info
//     }
// }
// const user=new User({name:"hyla",age:20});
// console.log(user.user);

/*
    模拟支付
*/
{
    interface Uplay{
        handle(price:number):void;
    }
    
    class Wplay implements Uplay{
        public handle(price:number):void{
            console.log(`this need ${price}`);
        }
    }
    class Zplay implements Uplay{
        public handle(price:number):void{
            console.log(`this need ${price}`);
        }
    }
    function Userplay(obj:string,num:number){
        let pay:Uplay;
        switch(obj){
            case "w":
                pay=new Wplay()
                break;
            case "z":
                pay=new Zplay()
                break;
        }
        pay.handle(num);
    }
}
{
    interface A{
        (price:number):void;
    }
    const b:A=(price:number)=>{
        console.log(price);
    }
    console.log(b(2));
}
{
    type Name={
        name:string
    }
    interface Age{
        age:number
    }
    type User=Name&Age
    const Person:User={
        name:"hyla",
        age:22
    }
    console.log(Person);
    
}   