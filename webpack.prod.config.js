var path = require('path');
var webpack = require('webpack');
var CleanCssPlugin = require('less-plugin-clean-css');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var babelPluginTransformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');

const extractLess = new ExtractTextPlugin({
  filename: '[name].[hash].styles.css'
});

module.exports = {
  entry: './index.js',

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015', 'react'],
            plugins: [babelPluginTransformObjectRestSpread]
          }
        }
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader',
              options: {
                plugins: [
                  new CleanCssPlugin({
                    advanced: true
                  })
                ]
              }
            }
          ]
        })
      }
    ]
  },

  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    extractLess,
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      {
        from: './src/assets/',
        to: 'assets/'
      }
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      test: /\.(js|jsx)$/
    })
  ]
};
