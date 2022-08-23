/*
    这是测试连接
*/

const mysql = require("mysql")

// 创建连接对象、
const con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "962464",
    port: "3306",
    database: "myblog"
})
// 开始连接
con.connect();
// 执行
const sql = "select * from users;"
con.query(sql, (err, result) => {
    if (err) {
        console.error(err)
    } else {
        console.log(result);
    }
})
// 关闭
con.end();