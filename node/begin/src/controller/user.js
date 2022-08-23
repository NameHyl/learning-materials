const { exec } = require("../db/mysql")
const login = (username, password) => {
    // if (uname === "admin" && upass == "123") return true;
    // return false
    const sql = `select username,password from users where username='${username}' and password='${password}'`
    return exec(sql).then(data => {
        // data[0]:对象形式的数据
        return data[0] || false;
    })
}
module.exports = {
    login,
}