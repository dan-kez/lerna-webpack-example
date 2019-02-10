/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.tsx',
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
    extensions: ['.ts', '.tsx', '.js', '.json'],
    symlinks: true,
  },
  devServer: {
    noInfo: true,
    port: 3000,
    open: true,
    publicPath: '/lerna-webpack-example',
    openPage: 'lerna-webpack-example',
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
        test: /\.(tsx?)|(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            rootMode: 'upward',
          },
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
