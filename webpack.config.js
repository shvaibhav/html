const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist/')
    },
    devtool: 'source-map',
    devServer: {
        contentBase: 'dist',
        inline: true,

    },
    module: {
        loaders: [
            { test: /\.txt$/, loader: "raw-loader" },
            {
                test: /\.html/,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]',
                }
            },
        ]
    }
};
