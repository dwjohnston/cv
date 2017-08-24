
module.exports = {

context: __dirname,
  	entry: "./app.js",
  devServer: {
		contentBase: [
			"./src/assets",
			"./src/css",
		]
	},


  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  target: "web",


};
