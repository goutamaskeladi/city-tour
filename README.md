Project based on React Redux

Tools used:
  * React and React DOM
  * Redux and React Redux
  * Webpack
  * Babel
  * Bootstrap 4
  * Node
  * Command-line - cmder
  
Install Procedure:
  * npm install

Setup Procedure From Scratch: Open the command line and type 
  * npm init
  * npm install --save react react-dom
  * npm install --save redux react-redux
  * npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react webpack webpack-cli webpack-dev-server html-webpack-plugin
  * Create .babelrc in root folder and put the following contents,

        {
          "presets": ["@babel/preset-env", "@babel/preset-react"]
        }

  * Create a file named webpack.config.js and fill it like the following,

          const HtmlWebpackPlugin = require('html-webpack-plugin');
          const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
              template: './public/index.html',
              filename: 'index.html',
              inject: 'body'
          });
          module.exports = {
              entry: './src/index.js',
              output: {
                  filename: 'bundle.js'
              },
              module: {
                  rules: [{
                      test: /.js$/,
                      exclude: /(node_modules)/,
                      use: {
                          loader: 'babel-loader'
                      }
                  }]
              },
              plugins: [HtmlWebpackPluginConfig]
          }

   *  Open up package.json to add the start script,

          "scripts": {
            "start": "webpack-dev-server --open --mode development",
            "build": "webpack --mode production"
          }

   *  Create entry file public/index.html and src/index.js

   *  npm start

   *  npm run build
  

