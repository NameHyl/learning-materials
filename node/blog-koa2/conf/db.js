/*
    判断线上线下
*/
const env = process.env.NODE_ENV //获取环境参数

let MYSQL_CONF;
let REDIS_CONF;

if (env === "dev") {
    // mysql
    MYSQL_CONF = {
        host: "localhost",
        user: "admin",
        password: "962464",
        port: "3306",
        database: "myblog"
    }
    // redis
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}
// 线上改变这个
if (env === "production") {
    // mysql
    MYSQL_CONF = {
        host: "localhost",
        user: "admin",
        password: "962464",
        port: "3306",
        database: "myblog"
    }
    // redis
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}