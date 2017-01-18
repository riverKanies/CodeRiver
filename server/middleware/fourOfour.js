module.exports = middleware

function middleware (req, res, next) {
  if (req.originalUrl.match(/404$/)) {
    res.status(404)
  }
  next()
}
