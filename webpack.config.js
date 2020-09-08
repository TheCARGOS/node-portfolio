const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require("webpack")

module.exports = {
    entry: "./frontend/main",
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./frontend/index.html"
      }),
      new VueLoaderPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.(woff(2)?|ttf|eot|jpg|png|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
          }
        ],
      },
    devServer: {
        contentBase: path.join(__dirname, './frontend'),
        compress: true,
        port: 9000
    }
    // mode: "production"
}