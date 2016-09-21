let path = require('path');
let fs = require('fs');
let webpack = require('webpack');

let environment = process.env.NODE_ENV;

let plugins = [new webpack.optimize.DedupePlugin()];
if (environment === "production"){
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			mangle: {
				except: [
					'window',
					'document',
					'exports',
					'require',
					'location',
					'history',
					'localStorage',
					'CustomEvent',
					'Event'
				]
			}
		})
	);
	plugins.push(new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('production')
		}
	}));
};

let entries = {
	"app/app.js":'./src/index.js'
};

module.exports = {
	entry: entries,
	output: {
		path: __dirname,
		filename: '[name]',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader:'babel',
				include: [
					path.resolve(__dirname, "src")
				],
				query: {
					cacheDirectory: true,
					plugins: ['transform-decorators-legacy'],
					presets: ['es2015','stage-0','react']
				}
			},
			{
				test: /(\.png|\.svg|\.gif|\.jpg)$/,
				loader: "url",
				include: [
					path.resolve(__dirname, "src")
				],
				query:{
					limit:Number.MAX_SAFE_INTEGER
				}
			},
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, "src")
				],
				loader: "style!css"
			},
			{
				test: /\.json$/,
				include: [
					path.resolve(__dirname, "src")
				],
				loader: "json"
			}
		]
	},
	plugins:plugins
};
