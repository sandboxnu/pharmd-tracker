const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const DiezWebpackPlugin = require("diez-webpack-plugin");
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;

  // reduce it to an object
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: "./src/index.js",
    resolve: {symlinks: false},
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: "url-loader"
          }
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new CopyWebpackPlugin([{from: "public"}, {from: "public/diez", to: "diez"}]),
      new DiezWebpackPlugin({
        sdk: "diez-pharmd-design"
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    performance: {hints: false},
    target: "web",
    node: {
      fs: "empty"
    },
    devServer: {
      stats: "errors-only",
      open: true,
      hot: true,
      watchOptions: {
        poll: 500,
        ignored: ["node_modules/**", ".git/**"]
      }
    }
  };
};
