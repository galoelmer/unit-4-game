const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "[name].[contenthash:10].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/images/[hash:5][ext][query]",
    clear: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash:10].css" }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
};
