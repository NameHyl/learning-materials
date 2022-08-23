const express = require('express');
const request = require('request');
const querystring = require('querystring');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// 请求 
app.get("/", (req, res) => {
    res.send("hello world;")
})
app.post("/hyl", (req, res) => {
    let queryData = querystring.stringify({
        // 这些是body里边的参数
        id: req.body.id,
        phone: req.body.phone,
        name: req.body.name
    })
    // 请求的地址和需要携带的参数
    let queryUrl = "http://localhost:5000" + queryData;

    request(queryUrl, (err, response, body) => {
        if (!err && response.statusCode == 200) {
            console.log(body);//打印返回的接口
            const jsonObj = JSON.parse(body) //解析返回的内容
            res.json(jsonObj);
        } else {
            console.log("请求错误");
        }
    })
})

//服务器或者本级端口号
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})