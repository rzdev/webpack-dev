const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: './assets/img',
                publicPath: 'assets/img',
                name: '[name].[ext]',
                emitFile: argv.mode == 'production' ? false : true, // jgn create file klo prod, copy pake CopyWebpackPlugin aja
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { interpolate:true }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "src/index.html",
        filename: "index.html"
      }),
      new HtmlWebPackPlugin({
        template: "src/page.html",
        filename: "page.html"
      }),
      new MiniCssExtractPlugin({
        filename: "assets/styles.css"
      }),
      new CopyWebpackPlugin([
        { from: '**/*', to: 'assets/img/', context:'src/assets/img' }
      ])
    ],
    output: {
      filename: 'assets/bundle.js'
    }
  }
};