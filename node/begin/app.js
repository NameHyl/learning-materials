/*
    12.11开始redis
*/
// a
const http = require('http');
const port = 3000
const querystring = require('querystring');

// b.导入模块
const handleBlogRouter = require('./src/router/blog');
const handleUserServer = require('./src/router/user');

// 处理post请求异步问题==>使用promise
const getPostData = req => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== "POST") {
            resolve({})
        }
        // if (req.headers["Conten-type"] !== "application/json") {
        //     resolve({})
        // }
        let postData = ""
        req.on("data", (data) => {
            postData += data
        })
        req.on("end", () => {
            if (!postData) {
                resolve({})
            } else {
                resolve(JSON.parse(postData))
            }
            return;
        })
    })
    return promise
}
// 获取cookie的过期时间
const getCookieExprires = () => {
    const d = new Date();
    // 一天后
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    return d.toGMTString();
}
// 设置全局session
const SESSION_DATA = {}
// a
const server = http.createServer((req, res) => {
    // 处理各式
    res.setHeader('Content-Type', 'application/json');
    // 设置携带参数
    req.query = querystring.parse(req.url.split("?")[1])
    // 解析cookie
    req.cookie = {}
    const cookieStr = req.headers.cookie || ""
    cookieStr.split(";").forEach(item => {
        if (!item) return;
        let arr = item.split("=");
        req.cookie[arr[0].trim()] = arr[1].trim();
    })
    // console.log(req.cookie);

    // 解析session(每請求一次needSetCookie改變一次)
    let needSetCookie = false;
    let userId = req.cookie.userId;
    if (userId) {
        if (!SESSION_DATA[userId]) {
            SESSION_DATA[userId] = {} //初始化
        }
    } else {
        needSetCookie = true;
        userId = `${Date.now()}_${Math.random()}`;
        SESSION_DATA[userId] = {}
    }
    req.session = SESSION_DATA[userId];

    // 处理post得到的数据
    getPostData(req).then(postData => {
        req.body = postData
        // 每个模块的请求
        const blogData = handleBlogRouter(req, res);
        if (blogData) {
            blogData.then(data => {
                if (needSetCookie) {
                    res.setHeader('Set-Cookie', `useId=${userId};path=/; httpOnly; expires=${getCookieExprires()}`);
                }
                res.end(JSON.stringify(data))
            })
            return;
        }
        const userData = handleUserServer(req, res);
        if (userData) {
            // res.end(JSON.stringify(userData))
            // return;
            userData.then(data => {
                if (needSetCookie) {
                    res.setHeader('Set-Cookie', `useId=${userId};path=/; httpOnly; expires=${getCookieExprires()}`);
                }
                res.end(JSON.stringify(data))
            })
            return;
        }
        // 没有返回404
        res.writeHead(404, { "Content-type": "text/plain" })
        res.write("404 Not Foundsss\n")
        res.end()
    })

})

// a
server.listen(port)
console.log("localhost 3000");