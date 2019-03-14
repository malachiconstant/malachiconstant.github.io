var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/App.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
	module : {
	    rules : [
			{
				test : /\.jsx?/,
				include : APP_DIR,
				loader : 'babel-loader'
			},
			{
			    test: /\.scss$/,
			    loader: ExtractTextPlugin.extract({
			    	fallback: 'style-loader',
			    	use: ['css-loader','postcss-loader','sass-loader']
			    })
			}
	    ]
	 },
    plugins: [
        new ExtractTextPlugin({
        	filename: 'style.css',
        	disable: false,
        	allChunks: true
        })
    ]	 
};

module.exports = config;