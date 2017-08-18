module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "./dist/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.txt$/, loader: "raw-loader" }
        ]
    }
};