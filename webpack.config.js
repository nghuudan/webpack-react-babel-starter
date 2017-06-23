var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var babelPluginTransformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');

const extractLess = new ExtractTextPlugin({
  filename: '[name].[hash].styles.css'
});

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3333
  },

  devtool: 'inline-source-map',

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
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: ['source-map-loader']
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
              loader: 'less-loader'
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
    })
  ]
};
