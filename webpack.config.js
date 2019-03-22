const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry:  ['webpack-hot-middleware/client', './src/index.js'], // webpackがファイルを生成する基点になるファイル名
  output: {
    filename: 'main.js', // 出力されるファイル名
    publicPath: '/example_public_path/' // 出力されるファイルを読み込めるパスを指定する
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};