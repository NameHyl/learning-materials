// const fs = require('fs');
// // 处理路径问题
// const path = require('path');

// // 当前文件下的data.txt文件
// const fileName = path.resolve(__dirname, 'data.txt')


// 1.读取文件内容
// fs.readFile(fileName, 'utf8', (err, data) => {
//     if (err) {
//         return console.error(err);
//     }
//     // data是二进制的
//     console.log(data.toString());
// })
// 2.写入文件
// const data = "123\n";
// const opt = {
//     flags: "a" //a是写入， w是覆盖
// }
// fs.writeFile(fileName, data, opt, (err) => {
//     if (err) console.error(err);
// })
// 3.判断是否有文件
// fs.exists(fileName, (exist) => {
//     console.log(exist);
// })

/*
    会存在缺陷，读写这些太耗内存和cpu
    引入steam流 ===如同水流一样，一点点汇入江海
    演例copy文件
*/
// const fileName2 = path.resolve(__dirname, "copy.txt");
// // 创建读写的stream对象
// const readSteam = fs.createReadStream(fileName)
// const writeSteam = fs.createWriteStream(fileName2)
// // 执行steam流
// readSteam.pipe(writeSteam)
// readSteam.on("end", () => {
//     console.log("copy finished");
// })
/*
    文件IO和网咯IO结合的实例
*/
const http = require('http');
const fs = require('fs');
const path = require('path');
const fileName = path.resolve(__dirname, 'data.txt')
const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        // 读取文件
        const readSteam = fs.createReadStream(fileName, { flags: "a" });
        // 网络写入？
        readSteam.pipe(res);
    }
})
server.listen(3000)