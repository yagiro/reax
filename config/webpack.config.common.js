// TODO: adjust to webpack4

const config = {
    entry: './src/index.js', // entry point
    module: {
        rules: [
            {
                test: /\.jsx?$/, // search for .js & .jsx files 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [ '@babel/preset-env', '@babel/preset-react' ],
                      plugins: [ '@babel/plugin-proposal-object-rest-spread', 'react-hot-loader/babel' ],
                    },
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,                
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            /** TODO! add image loader */
            /** TODO! add svg loader */
            /** TODO! add font loader */
       ]
    },
 }
 module.exports = config;
