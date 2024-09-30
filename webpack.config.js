const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const browser = process.env.browser || 'chrome'; // Use process.env.browser as fallback

  return {
    entry: {
      content: './src/common/content.js',
    },
    output: {
      path: path.resolve(__dirname, 'build', browser),
      filename: '[name].js'
    },

    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: `src/${browser}/manifest.json`, to: 'manifest.json' },
          { from: 'src/common/icons', to: 'icons' },
        ]
      }),
    ],
    mode: argv.mode === 'development' ? 'development' : 'production',
    devtool: argv.mode === 'development' ? 'inline-source-map' : false,
    watch: argv.mode === 'development' // Enable watch mode only in development
  };
};
