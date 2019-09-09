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
            },{
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },{
                test: /.\css$/,
                exclude:[/node_modules/],
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}