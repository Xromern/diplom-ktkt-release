const path = require('path')
const webpack = require('webpack')
resolve: {
    module.exports = {
        entry: './public/js/index.js',
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', "sass-loader"]
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ],
    }

}
