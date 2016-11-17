import config from '../config'

const paths = config.utils_paths

const fileLoaders = [
  {
    test: /\.md$/,
    loader: 'babel-loader!reactdown/webpack'
  },
  {
    test: /\.woff$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.woff2$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
  }, {
    test: /\.otf$/,
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
  }, {
    test: /\.ttf$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
  }, {
    test: /\.eot$/,
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]'
  }, {
    test: /\.svg$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml',
    include: paths.universal('styles/fonts')
  }, {
    test: /\.(png|jpg|svg)$/,
    loader: 'url-loader?limit=8192'
  }, {
    test: /masonry-layout/,
    loader: 'imports-loader?define=>false&this=>window'
  }
]

export default fileLoaders
