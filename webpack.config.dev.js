const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	mode: 'development',
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		library: 'lib',
		libraryTarget: 'umd'
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './public',
		hot: true,
		port: 3001,
		open: true,
		historyApiFallback: true,
		clientLogLevel: 'silent'
	},
	devtool: 'eval-cheap-module-source-map'
});
