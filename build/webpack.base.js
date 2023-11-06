const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
        filename: 'static/js/[name].js',
        path: path.join(__dirname, '../dist'),
        clean: true,
        publicPath: '/'
    },

    module: {
        rules: [
            // 配置loader解析ts/jsx
            {
                test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-typescript'
                        ]
                    }
                }
            },
            // 配置loader解析css文件
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 图片加载 webpack5自带asset-module处理
            {
                test: /.(png|jpg|jpeg|gif|svg)$/,
                type: "asset",
                generator: {
                    filename: 'static/images/[name][ext]', // 文件输出目录和命名
                },
            },
            // 字体图标文件加载
            {
                test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
                type: "asset", // type选择asset
                generator: {
                    filename: 'static/fonts/[name][ext]', // 文件输出目录和命名
                },
            },
        ],

    },
    resolve: {
        // ts不支持引入.ts/.tsx后缀文件，
        extensions: ['.js', '.tsx', '.ts'],
        alias: {
            '@': path.join(__dirname, '../src')
        }
    },
    // 将构建好的静态资源注入html文件
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            inject: true, // 自动注入静态资源
        })
    ],
    // 持久化缓存
    cache: {
        type: 'filesystem', // 使用文件缓存
    },
}