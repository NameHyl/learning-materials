{
    // 1.泛型
    function dump(value) {
        return value.length;
    }
    // 2.泛型
    function dump1(value) {
        return value.length;
    }
    var a = dump("string");
    var b = dump1([1, 2, 3]);
    console.log(a);
    console.log(b);
}
{
    var Dump = /** @class */ (function () {
        function Dump() {
            this.arr = [];
        }
        Dump.prototype.push = function () {
            var _a;
            var item = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                item[_i] = arguments[_i];
            }
            (_a = this.arr).push.apply(_a, item);
        };
        return Dump;
    }());
    var u1 = { name: "hyla", age: 22 };
    var u2 = { name: "hyl", age: 22 };
    var result = new Dump();
    result.push(u1, u2);
    console.log(result);
}
{
    var User = /** @class */ (function () {
        function User(user) {
            this.user = user;
        }
        User.prototype.get = function () { return this.user; };
        return User;
    }());
    var user = new User({ name: "hyla", age: 22 });
    console.log(user.get().name);
}
{
    var hyla = {
        title: "hyla",
        isLock: false,
        content: {
            name: "hyla",
        }
    };
    console.log(hyla);
}
