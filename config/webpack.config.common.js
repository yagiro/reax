// TODO: adjust to webpack4
const path = require('path');

const config = {
	entry: './src/index.js', // entry point
	module: {
		rules: [
			{
				test: /\.jsx?$/, // search for .js & .jsx files 
				include: path.resolve('./src'),
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
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [ 'file-loader' ],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [ 'file-loader', ],
			},
			{
				test: /\.(csv|tsv)$/,
				use: [ 'csv-loader' ],
			},
			{
				test: /\.xml$/,
				use: [ 'xml-loader' ],
			},
		]
	},
};

module.exports = config;
