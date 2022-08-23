/*
    判断线上线下
*/
const env = process.env.NODE_ENV //获取环境参数

let MYSQL_CONF;

if (env === "dev") {
    MYSQL_CONF = {
        host: "localhost",
        user: "admin",
        password: "962464",
        port: "3306",
        database: "myblog"
    }
}
// 线上改变这个
if (env === "production") {
    MYSQL_CONF = {
        host: "localhost",
        user: "admin",
        password: "962464",
        port: "3306",
        database: "myblog"
    }
}
MYSQL_CONF = {
    host: "localhost",
    user: "admin",
    password: "962464",
    port: "3306",
    database: "myblog"
}
module.exports = {
    MYSQL_CONF
}