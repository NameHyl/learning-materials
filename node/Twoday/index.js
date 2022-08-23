const http = require('http');
const querystring = require('querystring');
const server = http.createServer((req, res) => {
    // 获取方式 
    const method = req.method
    // 获取地址 
    const url = req.url
    // 获取地址
    const path = url.split("?")[0]
    // 获取参数
    const query = querystring.parse(url.split("?")[1])

    // 设置为json格式数据
    res.setHeader('Content-Type', 'application/json')

    // 返回数据
    const resData = {
        method,
        url,
        path,
        query
    }

    // 判断
    if (method === 'GET') res.end(JSON.stringify(resData));
    if (method === 'POST') {
        let postData = ""
        req.on('data', chunk => {
            postData += chunk
        })
        req.on('end', () => {
            resData.postData = postData;
            // 返回
            res.end(JSON.stringify(resData))
        })
    }
})

server.listen(3000)
console.log("ok");