var addData = function (user) {
    return 1;
};
var upData = function (user) {
    return 2;
};
addData({ name: "user", age: 12 });
upData({ name: "user", age: 12, sex: "nan" });
// 2.类似元组
var tuple = ["1", true, 2];
// 3.Enum
var Sextype;
(function (Sextype) {
    Sextype[Sextype["BOY"] = 1] = "BOY";
    Sextype[Sextype["GIRL"] = 2] = "GIRL";
})(Sextype || (Sextype = {}));
var user = {
    name: "user",
    sex: 1
};
console.log(Sextype.GIRL);
// 4.断言 as const:根据具体的值转化类型
// let a=<const>"11"
// 5.非空断言 as 确定类型或者!
