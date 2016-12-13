const customOptions = {}

function SitemapPlugin (options) {
  if (!options.path) {
    throw new Error('SitemapPlugin: Path required!')
  }
  customOptions.path = options.path
}

SitemapPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {
    const sm = require('sitemap')

    const routes = require(customOptions.path)
    const changefreq = 'daily'
    const priority = 0.1
    const hostname = 'http://www.thriveglobal.com'

    const sitemap = sm.createSitemap({
      hostname: hostname,
      cacheTime: 600000,
      urls: routes.map(function (route) {
        return {
          url: route,
          changefreq: changefreq,
          priority: priority
        }
      })
    })

    const results = sitemap.toXML()
    // Insert this list into the Webpack build as a new file asset:
    compilation.assets['sitemap.xml'] = {
      source: function () {
        return results
      },
      size: function () {
        return results.length
      }
    }

    callback()
  })
}

module.exports = SitemapPlugin
