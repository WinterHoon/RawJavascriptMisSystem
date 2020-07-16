
let path = require('path');
//安装html-webpack-plugin cnpm install html-webpack-plugin
let HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(path.resolve(__dirname,));
module.exports = {
    entry: "./app.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    //loader的配置
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    'css-loader'
                ]
            }
        ]
    },
    //插件的配置
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        //项目构建的路径
        contentBase:path.resolve(__dirname,'dist'),
        //启动gzip压缩
        compress: true,
        //打开的端口号
        port: 3000,
        //自动打开浏览器
        open: true
    }
}