const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
require("babel-register");

const config = {
  entry: ["@babel/polyfill","./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.template.html",
      filename: "index.html",
      hash: true,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer",
    }),
  ],
  mode: "development",
  stats: {
    colors: true,
  },
 devServer: {
            contentBase: './dist',
            inline:true,
            port: 3000
    }
};

module.exports = config;
