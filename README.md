# just-vue

A quick starter for Vue and Webpack.

## Usage

```sh
$ npm run dev

$ npm start

$ npm run prod
```

## webpack.config.js

```js
var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    paths = {
        root: '/',
        source: {
            root: './src/'
        },
        dist: {
            root: './dist/',
            script: './dist/js/',
            style: './dist/css/'
        }
    };
var Configrue = {
    entry: {
        app: ['./src/app.js'],
    },
    output: {
        path: paths.dist.root,
        filename: 'js/[name].js',
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
                test: /\.vue$/,
                loaders: ['vue']
            },
            {
                test: /\.js$/,
                // for normal use cases only node_modules is needed.
                loaders: ['babel'],
                exclude: [/node_modules/]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass'),
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style!css'),
            },
            {
                test: /\.(gif|jpg|jpeg|png)$/,
                loader: 'url?limit=5120&name=images/[name].[ext]',
            },
        ]
    },
    babel: {
        presets: ['es2015']
    },
    plugins: [
        new ExtractTextPlugin('css/style.css'),
    ],
};

if (process.env.NODE_ENV === 'production') {
    Configrue.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = Configrue;
```
