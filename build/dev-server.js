var webpack = require('webpack') 
var express = require('express')
var opn = require('opn')
var app = express()
var port=9090
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')

var compiler = webpack(require('./webpack.base.conf'))
var middleWare = require('webpack-dev-middleware')(compiler,{
    stats:{
        colors:true,//为日志设置颜色
        chunks:false//设置不显示块编译输出
    }
})
app.use(middleWare)
app.use('/static',express.static('./static'))
// https://www.npmjs.com/package/http-proxy-middleware
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})
app.listen(port,function(){
    opn("http://localhost:"+port)
})