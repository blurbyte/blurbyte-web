import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true
};

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'whatwg-fetch',
    './src/index.js'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:3000/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=assets/[name].[ext]'},
      {test: /\.[ot]tf$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream&name=assets/[name].[ext]'},
      { test: /(\.css)$/, loaders: ['style', 'css?sourceMap', 'postcss'] }
    ]
  },
  postcss: () => [autoprefixer]
};
