const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

const common = {
	// Entry accepts a path or an object of entries.
	// The build chapter contains an example of the latter.
	entry: PATHS.app,
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	}
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
	module.exports = merge(common, {
		devtool: 'eval-source-map',
		devServer: {
			contentBase: PATHS.build,
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,
			stats: 'errors-only',
			host: process.env.HOST,
			port: process.env.PORT
		},
		module: {
			loaders: [
				{
					test: /\.css$/,
					loaders: ['style', 'css'],
					include: PATHS.app
				}
			]
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	});
}

if(TARGET === 'build') {
	module.exports = merge(common, {});
}
