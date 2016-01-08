var path = require('path');

var webpack = require('webpack');
var cssnext = require('cssnext');
var cssimport = require('postcss-import');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlPlugin = require('./lib/html-plugin');
var htmlObj = require('./html.js');

var plugins = [
  new webpack.HotModuleReplacementPlugin()
]

var isProd = process.env.NODE_ENV === 'production' ? true : false;

var html = htmlObj.dev;
if (isProd) {
  html = htmlObj.prod;
  plugins.push(new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}));
  plugins.push(new ExtractTextPlugin('style.css', {allChunks: true}));
}

plugins.push(new HtmlPlugin({html: html}));

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  stylePath: path.resolve(__dirname, 'app', 'style'),
  postcss: function () {
    return [
      cssimport({
        path: './app/style/index.css',
        onImport: function (files) {
          files.forEach(this.addDependency)
        }.bind(this)
      }),
      cssnext()
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    cssFilename: 'style.css',
    publicPath: '/'
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'app')
    },
    {
    test: /\.css$/,
    loader: isProd ? ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss') : 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
    }]
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: [
      '',
      '.js',
      '.css'
    ],
    modulesDirectories: [
      'app',
      'node_modules'
    ]
  }
};
