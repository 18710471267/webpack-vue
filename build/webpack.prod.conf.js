var path = require('path')
var merge = require('webpack-merge')
var baseCompiler = require('./webpack.base.conf')
var compiler = merge(baseCompiler,{
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'js/bundle.js'
    }
})
module.exports = compiler