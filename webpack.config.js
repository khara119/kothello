const webpack = require('webpack')

module.exports = [
	{
		mode: 'development',
		entry: './dev/app.js',
		output: {
			path: __dirname + '/dist/',
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader',
					]
				},
				{
					test: /\.less$/,
					use: [
						'style-loader',
						'css-loader',
						'less-loader',
					]
				},
				{
					test: /\.tag$/,
					enforce: 'pre',
					exclude: /node_modules/,
					use: [
						{
							loader: 'riot-tag-loader',
							options: {
								debug: true,
							}
						}
					]
				},
				{
					test: /\.js|\.tag$/,
					enforce: 'post',
					exclude: /node_modules/,
					use: [
						{
							loader: 'buble-loader',
							options: {
								debug: true,
							}
						}
					]
				}
			]
		},
		resolve: {
			extensions: ['.js', '.tag']
		},
		plugins: [
			new webpack.ProvidePlugin({ riot: 'riot' })
		]
	}
];
