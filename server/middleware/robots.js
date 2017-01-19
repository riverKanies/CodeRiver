module.exports = middleware

var fs = require('fs')
var getSubdomain = require('thrive-utilities').getSubdomain

const txt = fs.readFileSync(`${__dirname}/disallow.txt`, 'utf8')

const doNotCrawl = ['accenture']

function okToCrawl (hostname) {
  const subdomain = getSubdomain(hostname)

  return !doNotCrawl.find(function (s) { return subdomain.match(s) })
}

function middleware (req, res, next) {
  if (req.url !== '/robots.txt' || okToCrawl(req.hostname)) {
    return next()
  }
  res.end(txt)
}
