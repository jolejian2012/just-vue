var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['./src/main.js'],
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.css']
    },
    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
        loaders: [
            {
                test: /\.js$/,
                // for normal use cases only node_modules is needed.
                loaders: ['babel'],
                exclude: [/node_modules/]
            },
            {
                test: /\.vue$/,
                loaders: ['vue']
            }
        ]
    },
    vue: {
        autoprefixer: false
    },
    babel: {
        presets: ['es2015']
    },
    plugins: []
}
