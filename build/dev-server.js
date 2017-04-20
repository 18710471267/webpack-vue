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
    plugins:[
        new htmlWebpackPlugin({
            filename:"index.html",
            template:"index.html"
        })
    ]
})
var middleWare = require('webpack-dev-middleware')(compiler,{})
app.use(middleWare)
app.listen(port,function(){
    opn("http://localhost:"+port)
})