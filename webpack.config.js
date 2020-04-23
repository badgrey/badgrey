const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
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
};
