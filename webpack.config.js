const ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {

context: __dirname,
  	entry: "./app.js",

    output: {
      path: __dirname + "/dist",
      filename: "bundle.js",
    },


  devServer: {
		contentBase: [
			"./src/assets",
			"./src/css",
		]
	},


  module: {
		loaders: [
			{ test: /\.scss$/, use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: [{
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }],
				publicPath: "./"
			}) },


      {
        test: /\.html$/,
        loader: 'html-loader'
      },

			{ test: /\.png$/, loader: "file-loader" }
		]
	},

	devtool: "source-map",

  target: "web",

  plugins: [
  new ExtractTextPlugin({
    filename: "./style.css",
    disable: false,
    allChunks: true
  })],



};
