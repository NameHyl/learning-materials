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
    var Wplay_1 = /** @class */ (function () {
        function Wplay() {
        }
        Wplay.prototype.handle = function (price) {
            console.log("this need ".concat(price));
        };
        return Wplay;
    }());
    var Zplay_1 = /** @class */ (function () {
        function Zplay() {
        }
        Zplay.prototype.handle = function (price) {
            console.log("this need ".concat(price));
        };
        return Zplay;
    }());
    function Userplay(obj, num) {
        var pay;
        switch (obj) {
            case "w":
                pay = new Wplay_1();
                break;
            case "z":
                pay = new Zplay_1();
                break;
        }
        pay.handle(num);
    }
}
{
    var b = function (price) {
        console.log(price);
    };
    console.log(b(2));
}
{
    var Person = {
        name: "hyla",
        age: 22
    };
    console.log(Person);
}
