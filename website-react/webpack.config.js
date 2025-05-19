const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // injects styles into DOM
                    'css-loader', // translates CSS into CommonJS
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer Dart Sass
                            implementation: require('sass'),
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
    },
    // other configuration options
};
