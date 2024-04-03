export function loadersWebpack() {
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};
	const scssLoader = {
		test: /\.s[ac]ss|css$/i,
		use: ['style-loader', 'css-loader', 'sass-loader'],
	};
	const fileLoader ={
		test: /\.(png|jpe?g|gif)$/i,
		use: 'file-loader'
	}

	return [scssLoader, tsLoader, fileLoader];
}