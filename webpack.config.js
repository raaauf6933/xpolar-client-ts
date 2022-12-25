var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const resolve = path.resolve.bind(path, __dirname);

module.exports = (env, argv) => {
  return {
    mode: 'development',
    entry: './index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      ...(env.NODE_ENV === 'development' ? { publicPath: '/' } : {}),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(s[ac]ss|css)$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          loader: 'file-loader',
          include: [
            resolve('assets/fonts'),
            resolve('assets/images'),
            resolve('assets/favicons'),
            resolve('assets/icons'),
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@assets': path.resolve(__dirname, 'assets'),
        '@': path.resolve(__dirname, 'src'),
      },
    },
    devServer: {
      port: 3000,
      compress: true,
      historyApiFallback: true,
    },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        hash: true,
      }),
      new Dotenv(),
    ],
  };
};
