var express = require('express')
var opn = require('opn')
var app = express()
var port=9090
app.listen(port,function(){
    opn("http://localhost:"+port)
})