var path = require('path');

var webpack = require('webpack');

module.exports = {
	// Entry point for static analyzer:
	entry: [
		'webpack/hot/dev-server',
		'./src/main'
	],

	output: {
		// Where to put build results when doing production builds:
		// (Server doesn't write to the disk, but this is required.)
		path: path.join(__dirname, 'output'),

		// JS filename you're going to use in HTML
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['', '.jsx', '.js']
	},

	module: {
		loaders: [
			{ test: /\.jsx$/, loaders: ['react-hot', 'jsx'] }
		]
	}
};