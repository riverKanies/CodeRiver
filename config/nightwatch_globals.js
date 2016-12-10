var fs = require('fs')

if (fs.existsSync('.env')) {
  require('dotenv').config()
}

module.exports = {
  local_url: process.env.HOST + ':' + process.env.PORT + '/'
}
