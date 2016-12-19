var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.jsx"
	},

	output: {
		path: "./dist",
		filename: "app.js"
	},

	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{test: /.scss/, loaders: ["style", "css", "sass"]},
		]
	},

	devtool: "source-maps",

	plugins: [
		new HtmlWebpackPlugin()
	]
};
