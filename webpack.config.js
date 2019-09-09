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
        rules:[
            {
                test: /.\js$/,
                use: ['babel-loader'],
                exclude:[/node_modules/],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        query: {
                          name:'assets/[name].[ext]'
                        }
                      }
                    },
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        query: {
                          mozjpeg: {
                            progressive: true,
                          },
                          gifsicle: {
                            interlaced: true,
                          },
                          optipng: {
                            optimizationLevel: 7,
                          }
                        }
                      }
                }]
            }            
            
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}