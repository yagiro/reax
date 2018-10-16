const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

// TODO: webpack4
// TODO: add clean dist plugin
// TODO: add html plugin

const config = merge(common, {
    output: {
        path: path.resolve('.', 'dist'), // the target directory for all output files
        filename: 'bundle.js', // the filename template for entry chunks
    },
    devtool: 'source-map',
 });

 module.exports = config;
