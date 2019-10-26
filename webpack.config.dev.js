const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./configs/webpack.config.base');

module.exports = merge(
  baseConfig, 
  {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/public/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './public',
      hot: true,
      port: 3001,
      open: true,
      historyApiFallback: true
    },
    devtool: 'inline-source-map'
  }
);