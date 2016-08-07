import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

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
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=assets/[name].[ext]'},
      {test: /\.[ot]tf$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream&name=assets/[name].[ext]'},
      { test: /(\.css)$/, loader: ExtractTextPlugin.extract('css?sourceMap!postcss') }
    ]
  },
  postcss: () => [autoprefixer]
};
