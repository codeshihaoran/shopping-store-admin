const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const copyPlugin = require('copy-webpack-plugin')
// 合并公共配置项
module.exports = merge(baseConfig, {
    mode: 'production', // 生产环境
    plugins: [
        new copyPlugin({
            patterns: [
                {
                    // 复制public文件 用于打包构建访问资源
                    from: path.resolve(__dirname, '../public'),
                    // 复制到dist目录中
                    to: path.resolve(__dirname, '../dist'),
                    // 忽略index.html html-webpack-plugin会自动生index.html到dist目录下
                    filter: source => {
                        return !source.includes('index.html')
                    }
                }
            ]
        })
    ]
})