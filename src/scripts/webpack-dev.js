const path = require('path')
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: process.cwd(),
  entry: {
    main: ['./src/core/index.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      useTypescriptIncrementalApi: true
    }),
    new ForkTsCheckerNotifierWebpackPlugin({
      title: 'TypeScript',
      excludeWarnings: false
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'astroturf/css-loader', 'postcss-loader']
      },
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true }
          },
          'astroturf/loader'
        ]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        include: path.resolve(__dirname, 'src', 'assets'),
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: path.resolve(__dirname, 'public', 'dist', 'assets')
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    clientLogLevel: 'warning',
    open: true,
    historyApiFallback: true,
    stats: 'errors-only'
  }
}