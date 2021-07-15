const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv").config(path.join(__dirname, "/.env"));
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Try the environment variable, otherwise use root

module.exports = () => {
  return {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
    },
    resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
    mode: process.env.NODE_ENV || "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images",
              },
            },
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "gameplay",
              },
            },
          ],
          exclude: path.resolve(__dirname, "./public/index.html"),
        },
      ],
    },
    devtool: false,
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      // new webpack.DefinePlugin(envKeys),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(dotenv.parsed),
      }),
    ],
    devServer: {
      contentBase: path.resolve("./dist"),
      // contentBase: path.join(__dirname, "src"),
      historyApiFallback: true,
      open: true,
      headers: {
        "X-Frame-Options": "sameorigin",
      },
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"],
    },
  };
};
