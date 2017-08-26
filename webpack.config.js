const config = {
    entry: './index.js', // entry point
    output: {
        filename: 'bundle.js', // place where bundled app will be served
    },
    devServer: {
          inline: true, // autorefresh
          port: 8080 // development port server
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // search for js files 
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'] // use es2015 and react
                }
            }
       ]
    },
    watchOptions: {
      poll: true // if file watch doesn't work
    }
 }
 module.exports = config;