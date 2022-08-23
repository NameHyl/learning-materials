## 开始安装
```js
// 1.
npm install express-generator -g
express 文件名
npm install & npm start
// 2.
npm i nodemon cross-env --save-dev
// 修改文件的运行文件
  "scripts": {
    "start": "node ./bin/www",
    "dev":"cross-env NODE_ENV=dev nodemon ./bin/www"
  },
```