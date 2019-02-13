const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js'
  ],
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ['css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        loader: ['url-loader?mimetype=image/png']
      }
    ]
  }
}
