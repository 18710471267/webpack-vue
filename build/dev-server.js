var webpack = require('webpack') 
var express = require('express')
var opn = require('opn')
var app = express()
var port=9090
var htmlWebpackPlugin = require('html-webpack-plugin')
var compiler = webpack({
    entry:'./src/entry.js',
    output:{
        path:"/",
        filename:"dist/bundle.js"
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue'
        }
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue-loader'   
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:"index.html",
            template:"index.html"
        })
    ]
})
var middleWare = require('webpack-dev-middleware')(compiler,{
    stats:{
        colors:true,//为日志设置颜色
        chunks:false//设置不显示块编译输出
    }
})
app.use(middleWare)
app.listen(port,function(){
    opn("http://localhost:"+port)
})