import ExtractTextPlugin from 'extract-text-webpack-plugin'

const loaderOptions = [
  { loader: 'css-loader', query: { modules: true, importLoaders: 1 } },
  { loader: 'postcss-loader' }
]

const styleLoaders = {
  development: {
    test: /\.css$/,
    loaders: [
      'style-loader',
      ...loaderOptions
    ]
  },
  production: {
    test: /\.css$/,
    loaders: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: [
        ...loaderOptions
      ]
    })
  }
}

export default styleLoaders
