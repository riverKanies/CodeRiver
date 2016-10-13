import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  dev: [
    {
      test: /\.css$/,
      loaders: [
        'style-loader',
        { loader: 'css-loader', query: { modules: true } },
        { loader: 'postcss-loader' }
      ]
    },
    {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        { loader: 'css-loader', query: { modules: true } },
        { loader: 'postcss-loader' },
        {
          loader: 'sass-loader',
          query: { outputStyle: 'compressed' }
        }
      ]
    }
  ],
  prod: [
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [
          { loader: 'css-loader', query: { modules: true } },
          { loader: 'postcss-loader' }
        ]
      })
    },
    {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        { loader: 'css-loader', query: { modules: true } },
        { loader: 'postcss-loader' },
        {
          loader: 'sass-loader',
          query: { outputStyle: 'compressed' }
        }
      ]
    }
  ],
  extract:
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    })
}
