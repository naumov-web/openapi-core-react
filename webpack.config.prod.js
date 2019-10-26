const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const merge = require('webpack-merge');

const baseConfig = require('./configs/webpack.config.base');

module.exports = merge(
  baseConfig, 
  {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'bundle.[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    optimization: {
      minimizer: [
        new UglifyJSPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: true
          },
          sourceMap: false
        })
      ]
    },
    plugins: [
      new CompressionPlugin(),
      new HtmlWebPackPlugin({
        template: './src/public/index.html'
      }),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    ],
    devtool: 'inline-source-map'
  }
);