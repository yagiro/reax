const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge'); 
const common = require('./webpack.config.common');

const PORT = 8080;

const config = merge(common, {
	mode: 'development',
	devServer: {
		contentBase: path.resolve('./src'),
		port: PORT,
		allowedHosts: [ 'custom.domain.org' ], // optional: add 'custom.domain.org' to your hosts file (with localhost IP)
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},

	plugins: [
		new webpack.NamedModulesPlugin(), // show module paths when HMR is enabled
	],

	/** in case webpack's file watcher is not triggerd by file system */
	watchOptions: {
		poll: true
	},

	/** required for HMR when the dev server is accessed via a different domain */
	output: {
		publicPath: `http://localhost:${PORT}/`,
		filename: 'bundle.js',
	},
});

module.exports = config;
