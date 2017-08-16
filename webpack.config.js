module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
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
      }
    ]
  },
  target: "web"
};
