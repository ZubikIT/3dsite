const webpack = require('webpack');
const path = require('path');

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }
        ]
    }
};

module.exports = config;