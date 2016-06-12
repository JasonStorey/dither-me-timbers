module.exports = {
    entry: './index.js',
    output: {
        path: './dist/',
        filename: 'dither-me-timbers.js',
        library: 'DMT',
        libraryTarget: 'umd' 
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'stye!css'}
        ]
    }
};
