const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLPlugin({
          filename: 'index.html',
          template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css'
        })
      ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        { test: /\.js$/,
           exclude: /node_modules/,
           loader: "babel-loader" }
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 4200
    }
}