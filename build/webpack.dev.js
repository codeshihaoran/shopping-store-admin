const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
// 合并公共配置Base
module.exports = merge(baseConfig, {
    mode: 'development',// 开发模式 打包更快
    devServer: {
        port: 3001, // 服务端口号
        compress: false, // gzip压缩,开发环境不开启,提升热更新速度
        hot: true, // 开启热更新
        historyApiFallback: true, // 解决history路由404问题
        static: {
            directory: path.join(__dirname, "../public"), //托管静态资源public文件夹
        },
        // 服务端地址代理配置
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/public': {
                target: 'http://127.0.0.1:3000/public',
                changeOrigin: true,
                pathRewrite: {
                    '^/public': ''
                }
            }
        },
    },
    plugins: [
        // 无需刷新浏览器保存后自动更新
        new ReactRefreshWebpackPlugin(), // 添加热更新插件
    ],

})