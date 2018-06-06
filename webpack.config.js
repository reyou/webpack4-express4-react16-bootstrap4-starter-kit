// https://github.com/reyou/Ggg.Webpack
// https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel
const path = require("path");
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
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000
  }
};
module.exports = config;
