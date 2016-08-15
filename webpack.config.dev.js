import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true
};

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: true,
  entry: [
    './src/webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
    'whatwg-fetch',
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=assets/[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream&name=assets/[name].[ext]' },
      { test: /(\.css)$/, loaders: ['style', 'css?sourceMap', 'postcss'] }
    ]
  },
  postcss: () => [autoprefixer]
};
