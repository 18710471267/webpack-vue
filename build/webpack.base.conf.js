var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
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
}