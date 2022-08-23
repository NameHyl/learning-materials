const { login } = require("../controller/user")
const { SuccessModel, ErrorModel } = require("../model/resModel")

// 获取cookie的过期时间
const getCookieExprires = () => {
    const d = new Date();
    // 一天后
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    return d.toGMTString();
}
const handleUserServer = (req, res) => {
    // login
    if (req.method == "GET" && req.url.split("?")[0] === "/user/login") {
        // const { username, password } = req.body
        const { username, password } = req.query
        return login(username, password).then(userData => {
            if (userData) {
                // 设置session
                req.session.username = userData.username
                req.session.password = userData.password
                console.log("session:", req.session);

                // 操作cookie(httpOnly：做限制，防止前端改 expires:多少时间失效)
                // res.setHeader('Set-Cookie', `username=${userData.username};path=/; httpOnly; expires=${getCookieExprires()}`)
                return new SuccessModel(userData, "success")
            }
            return new ErrorModel("登录失败")
        })
    }
    // 测试是否的登录
    if (req.method == "GET" && req.url.split("?")[0] === "/user/text") {
        // cookie
        // if (req.cookie.username) {
        //     return Promise.resolve(
        //         new SuccessModel("登录成功")
        //     )
        // }
        // return Promise.resolve(
        //     new ErrorModel("登录失败")
        // )
        // session
        if (req.session.username) {
            return Promise.resolve(
                new SuccessModel({ session: req.session })
            )
        }
        return Promise.resolve(
            new ErrorModel("登录失败")
        )
    }
}
module.exports = handleUserServer