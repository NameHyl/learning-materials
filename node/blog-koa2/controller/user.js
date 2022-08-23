const { exec, escape } = require("../db/mysql")
const { genPassword } = require("../utils/cryp")
const login = async (username, password) => {
    // 密码加密
    // username=genPassword(username)
    password = genPassword(password)
    // xss
    username = escape(username)
    password = escape(password)
    console.log(username, password);
    const sql = `select username,password from users where username=${username} and password=${password}`
    const data = exec(sql)
    ctx.body = data[0] || false;
}
module.exports = {
    login,
}