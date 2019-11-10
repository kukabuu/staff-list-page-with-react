module.exports = {
	target: 'web',
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-react',
							['@babel/env', { targets: { browsers: ['last 7 versions'] } }]
						]
					}
				}
			},
			{
			  test: /\.css$/,
			  use: ['style-loader', 'css-loader']
			}, 
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[hash].[ext]',
						}
					}
				]
			}
		]
	}
};
