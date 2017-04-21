var webpack = require('webpack')
var compiler = require('./webpack.prod.conf')

require('shelljs/global')
var assetsPath = './dist/static/'
rm('-rf','./dist')
mkdir('-p',assetsPath)
cp('-R','static/*',assetsPath)

webpack(compiler,function (err,stats) {
    
})