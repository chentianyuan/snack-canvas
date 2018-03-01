const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry:{
        // 把全部给定的 path 片段连接到一起，并规范化生成的路径
        // 即入口文件目录设为，当前目录下的src/index.js
        index: path.join(__dirname,'src/index.js')
    },
    output:{
        path: path.join(__dirname,'/dist'),
        filename: 'bundle.js'
    },
    // 优化，很多插件的使用都转到这里了
    optimization:{
        splitChunks: {
            chunks:"all"
        },
        // runtimeChunk:true
    }
}