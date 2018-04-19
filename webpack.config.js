const webpack = require('webpack');

const config = {
    entry: './index.js', // entry point
    output: {
        filename: 'bundle.js', // place where bundled app will be served
    },
    devServer: {
        inline: true, // autorefresh
        port: 8080, // development port server,
        allowedHosts: [ 'my.host.domain' ] // optional: add 'my.host.domain' to your hosts file (with localhost IP)          
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // search for .js & .jsx files 
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'] // use es2015 and react
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,                
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
       ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: false
        }),
        new webpack.NamedModulesPlugin(),
    ],
    watchOptions: {
      poll: true // in case webpack's file watcher is not triggerd by file system
    }
 }
 module.exports = config;
