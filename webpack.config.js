const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/public'),
   filename: 'index.bundle.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 4000,
   historyApiFallback: true,
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     },
     {
      test: /\.s(a|c)ss$/,
       use: ['style-loader', 'css-loader', 'sass-loader']
     },

     {
      test: /\.svg$/,
      use: [ 

        {
          loader: 'svg-url-loader',
          options: {
            limit: 10000,
          }
        }
      ]
     },
     {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
     },
   ]
 },
 plugins: [new HtmlWebpackPlugin({template: './src/index.html', favicon: "./public/favicon_128x128.png"})],
}
