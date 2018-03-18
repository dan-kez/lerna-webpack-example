/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/lerna-webpack-example/'
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    symlinks: false,
  },
  devServer: {
    noInfo: true,
    port: 3000,
    open: true,
    publicPath: '/lerna-webpack-example'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'async/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: true,
      chunks: 'all',
    },
  },
};
