const http = require('http');
// get请求的
// const querystring = require('querystring');

// const server = http.createServer((req, res) => {
//     console.log("method: " + req.method);
//     const url = req.url
//     console.log(url);
//     req.query = querystring.parse(url.split('?')[1])
//     console.log(req.query);
//     res.end(
//         JSON.stringify(req.query)
//     )
// })
// POST
const server = http.createServer((req, res) => {
    // 数据格式
    console.log("content-type", req.headers['content-type']);
    // 接收数据
    let postData = ""
    req.on('data', chunk => {
        // chunk是二进制
        postData += chunk.toString();
    })
    req.on('end', () => {
        console.log("postData", postData);
        res.end("hello world")
    })
})

server.listen(3000)
console.log("ok");