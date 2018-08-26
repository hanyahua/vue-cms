const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'production',
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {test: /\.vue$/, use: ['vue-loader']}, 
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
        ]
    }
}