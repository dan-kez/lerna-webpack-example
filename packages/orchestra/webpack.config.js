/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
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
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
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
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](?!leaf|async-leaf)/,
          name: 'commons',
          priority: -20,
          chunks: 'all',
        },
      },
    },
  },
};
