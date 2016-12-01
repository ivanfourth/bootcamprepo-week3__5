var path = require("path");

var webpack = require("webpack");

module.exports = {

	entry:[
		"./source/main.js"
	],
	output:{
		path: path.join(__dirname, "dist"),
		publicPath: "/",
		filename: "bundle.js"
	},
	 devtool: "source-map",
	module:{
		loaders:[
		{
			test:/\.js$/,
			include:path.join(__dirname,"source"),
			loader:"babel-loader",
			query:{
				presets: ["es2015"]
			}
		}
		]
	},
	devServer:{
		contentBase:"./source",
		port:3000
	},
	debug:true
};