import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: true
};

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    'whatwg-fetch',
    './src/index.js'
    ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel' },
      { test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap') },
      {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']}
    ]
  }
};
