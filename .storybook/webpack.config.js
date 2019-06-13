const path = require('path');

module.exports = {
    module: {
        rules: [
            {
              test: /\.(scss|css)$/,
              use: ['style-loader', 'css-loader', 'sass-loader'],
              include: path.resolve(__dirname, '../'),
            },
            {
              test: /\.(png|jpe?g|gif|svg)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {},
                },
              ],
            },
            {
              test: /\.stories\.js?$/,
              loaders: [require.resolve('@storybook/addon-storysource/loader')],
              enforce: 'pre',
            },
        ],
    },
};



