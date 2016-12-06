if (process.env.NODE_ENV === 'production') {
  require('newrelic')
}

require('babel-register')
require('../server')
