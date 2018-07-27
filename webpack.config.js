const path = require('path');

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js'],
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};
