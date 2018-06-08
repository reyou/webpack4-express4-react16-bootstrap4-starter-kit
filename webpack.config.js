// https://github.com/reyou/Ggg.Webpack
// https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const config = {
  mode: "development",
  entry: "./client.jsx",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname),
    filename: "client.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    hot: true,
    port: 9000
  }
};
module.exports = config;
