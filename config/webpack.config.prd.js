const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.common');

// TODO: add clean dist plugin
// TODO: add html plugin

const config = merge(common, {
	mode: 'production',
	output: {
		path: path.resolve('.', 'dist'), // the target directory for all output files
		filename: 'bundle.js', // the filename template for entry chunks
	},
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin([ 'dist' ], {
			verbose: true,
			dry: false,
			root: path.resolve('.'),
		}),
		new HtmlWebpackPlugin({
			template: path.resolve('./src/index.html'),
			inject: false,
		}),
	],
});

module.exports = config;
