# webpack5

## 1. loader [掌握用法]

### 1.1 打包less

- [1] 创建less文件,在入口 `index.js` 引入它

- [2] 下载 `less` 和 `less-loader`

  ```javascript
  yarn add less less-loader -D
  ```

- [3] 配置

  ```javascript
  {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
  }
  ```

  

### 1.2 打包图片

#### 1.2.1 打包css中的图片( 背景图 )

- [1] 在css或less中写背景图样式

- [2] 下载对应的打包图片的loader `url-loader` 和 `file-loader`

  ```javascript
  yarn add url-loader file-loader -D
  ```

- [3] 写配置

  ```javascript
  {
      test: /\.(jpg|png|gif)$/,// 图片的格式后置
      loader: 'url-loader',  // 处理图片格式的对应的loader
      options: {  // 自定义配置 针对图片打包
          limit: 10 * 1024, // 10kb 限制大小 小于10kb 就base64编码 否则 就直接打包
          name: '[hash:16].[ext]', // 打包输出的图片名字长度
          esModule: false, // 兼容性 关闭esModule 强制使用node的模块化方案
      }
  }
  ```

#### 1.2.2 打包html中的图片

- [1] 在 html 中, 使用image标签,引入图片

- [2] 下载插件 `html-webpack-plugin`

  ```javascript
  yarn add html-webpack-plugin@4.5.0 -D
  yarn add html-loader@1.3.2 -D
  ```

- [3] 配置插件

  ```javascript
  // 出口
  output: {
      path: path.resolve(__dirname, 'dist'), // 输出路径
      filename: 'bundle.js', // 打包输出的文件名
      publicPath: './', // #---> 公共路径 自动拼接在查找的资源前面
  },
      
  // html中的图片
  {
      test: /\.html$/,
      loader: 'html-loader'
  },
      
  // 插件
  plugins: [
      // 打包html页面
      new HtmlWebpackPlugin({
          template: './src/index.html', // 以哪个html页面为"模板"进行打包
          filename: 'index.html', // 打包输出的文件名
      }),
  ],
  ```

#### 1.2.3 打包js中的图片

- [1] js引入本地图片 必须使用 require() 引入 才能打包

  ```javascript
  // 引入图片
  const img = require('../imgs/xh.jpg')
  document.querySelector('#imgWrapper').src = img
  ```

### 1.3 打包字体图标

- [1] 下载`iconfont.css`, 在 index.js 引入

- [ 2 ]  下载loader `file-loader`

  ```javascript
  yarn add file-loader -D
  ```

- [ 3 ] 配置loader

  ```javascript
  // fonts
  {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
          name: '[hash:16].[ext]',
      }
  }
  ```

### 1.4 整理dist目录

- [ js ] 的输出文件夹 

  ```javascript
  // 出口
  output: {
      path: path.resolve(__dirname, 'dist'), // 输出路径
      filename: 'js/bundle.js', // 输出到js文件夹中 叫: bundle.js !!!!!!!!!!!!!!!!!!!!!
      publicPath: './', // 公共路径 自动拼接在查找的资源前面
  },
  ```

- [ 图片 ] 的输出文件夹

  ```javascript
  // css背景图
  {
      test: /\.(jpg|png|gif)$/,
      loader: 'url-loader',
      options: {
          limit: 10 * 1024, // 10kb 限制大小 小于10kb 就base64编码
          name: '[hash:16].[ext]', // 名字长度
          esModule: false, // 兼容性
          outputPath: 'imgs', // 输出的路径 !!!!!!!!!!!!!!!!!!!!!!!
      }
  },
  ```

  

- [ fonts ] 的输出文件夹

  ```javascript
  // fonts
  {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
          name: '[hash:16].[ext]',
          outputPath: 'fonts', // 输出的路径 !!!!!!!!!!!!!!!!!!!!!!
      }
  }
  ```

### 1.5 es6 转 es5

- [ 1 ] 下载模块  `babel-core` 和 `babel-loader`  和 `babel-preset-es2015`

  ```javascript
  yarn add babel-core babel-loader@7.1.5 babel-preset-es2015 -D
  ```

- [ 2 ] 配置loader

  ```javascript
  {
      test: /\.js$/,
      exclude: /node_modules/,  // 排除 node_modules 第三方模块
      loader: 'babel-loader'
  }
  ```

- [ 3 ] 在项目根目录, 创建文件 `.babelrc`

  ```javascript
  {
    "presets": [
        "es2015"
    ]
  }
  ```

## 2. 插件 plugins [ 掌握用法 ]

### 2.1 webpack插件使用步骤

- [ 1 ] 下载插件

  ```javascript
  yarn add 插件名 -D
  yarn add html-webpack-plugin -D
  yarn add mini-css-extract-plugin -D
  yarn add optimize-css-assets-webpack-plugin -D
  ```

- [ 2 ]  引入插件

  ```javascript
  const 变量 = require('插件名')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  const MiniCssExtractPlugin = require('mini-css-extract-plugin')
  const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
  ```

- [ 3 ]  写插件配置

  ```javascript
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html', // 以哪个文件为模板
          filename: 'index.html' // 输出的文件名
      }),
      new 引入插件的变量({
          key: value  // 写配置 配置都是键值对格式
      }),
      
      // 提取css
      new MiniCssExtractPlugin({
          filename: 'css/bundle.css', // 输出的文件名
      }),
      new OptimizeCssAssetsWebpackPlugin() // 压缩css
  ]
  ```

- [ 4 ] 修改 less 和 css 的loader配置

  ```javascript
   // css
  {
      test: /\.css$/,
      use: [
          // 不再使用style-loader 替换成提取css插件自带的loader
          {
              loader: MiniCssExtractPlugin.loader,
              options: {
                  publicPath: '../' // 公共路径 否则找图片找不到 默认拼接 ./
              }
          },
          'css-loader'
      ]
  },
  // less
  {
      test: /\.less$/,
      use: [
          {
              loader: MiniCssExtractPlugin.loader,
              options: {
                  publicPath: '../' // 公共路径
              }
          },
          'css-loader',
          'less-loader'
      ]
  },
  ```

  

## 3. 启动开发服务器 [ 了解 ]

- [ 1 ] 安装启动开发服务器的模块 `webpack-dev-server`

  ```javascript
  yarn add webpack-dev-server -D
  ```

- [ 2 ] 写配置

  ```javascript
   // 开发服务器
   devServer: {
      contentBase: path.resolve(__dirname, 'dist'), // 启动服务器根目录
      compress: true, // 启动gzip压缩
      port: 666,  // 端口
      open: true, // 自动打开浏览器 弹出服务器
      publicPath: '/', // 静态资源查找路径
      openPage: 'index.html', // 默认打开的页面
    },
  ```

- [ 3 ]  修改package.json

  ```javascript
  "scripts": {
      "build": "webpack",
      "serve": "webpack serve"
   },
  ```

- [ 4 ] 启动开发服务器

  ```javascript
  yarn serve 或 npm run serve
  ```

## 4. 区分 `开发环境` 和 `生产环境`

- [ 1 ] 下载模块 `cross-env`

  ```javascript
  yarn add cross-env -D
  ```

- [ 2 ] 修改 `package.json` 的配置

  ```javascript
   "scripts": {
      "build": "cross-env NODE_ENV=production webpack",
      "serve": "cross-env NODE_ENV=development webpack serve"
    },
  ```

- [ 3 ] 修改mode

  ```javascript
   // 模式
  mode: process.env.NODE_ENV, // 取出设置的环境变量 然后设置到 mode 上.
  ```

## 5 多页面打包完整配置

### webpack.config.js

```javascript
/**
 * webpack打包相关配置
 */
const path = require('path') // node内置模块 处理路径拼接
const HtmlWebpackPlugin = require('html-webpack-plugin') // 打包html页面的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 提取css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

// console.log('环境变量:', process.env.NODE_ENV)

// 暴露出去
module.exports = {
    target: 'web', // 打包目标是浏览器端

    // 入口
    entry: {
        index: "./src/js/index.js", // 广告页
        login: "./src/js/login.js", // 登录页
        register: "./src/js/register.js", // 注册页
    },

    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出路径
        filename: 'js/[name].js', // 打包输出的文件名
        publicPath: './', // 公共路径 自动拼接在查找的资源前面
    },

    // 模块解析规则
    module: {
        rules: [
            // css
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../' // 公共路径
                        }
                    },
                    'css-loader'
                ]
            },
            // less
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../' // 公共路径
                        }
                    },
                    'css-loader',
                    'less-loader'
                ]
            },
            // css背景图
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10 * 1024, // 10kb 限制大小 小于10kb 就base64编码
                    name: '[hash:16].[ext]', // 名字长度
                    esModule: false, // 兼容性
                    outputPath: 'imgs', // 输出的路径
                }
            },
            // html中的图片
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            // fonts
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:16].[ext]',
                    outputPath: 'fonts', // 输出的路径
                }
            },
            // es6 -> es5
            {
                test: /\.js$/,
                exclude: /node_modules/,  // 排除 node_modules 第三方模块
                loader: 'babel-loader'
            }
        ]
    },

    // 模式
    mode: process.env.NODE_ENV,

    // 开发服务器
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // 启动服务器根目录
        compress: true, // 启动gzip压缩
        port: 666,  // 端口
        open: true, // 自动打开浏览器 弹出服务器
        publicPath: '/', // 静态资源查找路径
        openPage: 'index.html', // 默认打开的页面
    },

    // 插件
    plugins: [
        // 提取css
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        // 压缩css
        new OptimizeCssAssetsWebpackPlugin(),

        // 广告页
        new HtmlWebpackPlugin({
            template: './src/index.html', // 以哪个html页面为"模板"进行打包
            filename: 'index.html', // 打包输出的文件名
            chunks: ['index'],
        }),

        // 登录页
        new HtmlWebpackPlugin({
            template: './src/login.html',
            filename: 'login.html',
            chunks: ['login'],
        }),

        // 注册页
        new HtmlWebpackPlugin({
            template: './src/register.html',
            filename: 'register.html',
            chunks: ['register'],
        }),
    ],
}
```

