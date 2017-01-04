var request = require('superagent')

module.exports = {
  'it should return a 404': (browser) => {
    browser.perform(function (done) {
      request
        .get(browser.globals.local_url + '404')
        .set('Accept', 'text/html,application/xhtml+xml,application/xml')
        .end(function (err, res) {
          if (err) {
            // skip
          }
          browser.assert.ok(res.status === 404, 'we got our 404!')
          done()
        })
    }).end()
  },
  'it should not return a 404 for a pre-defined thing': (browser) => {
    browser.perform(function (done) {
      request
        .get(browser.globals.local_url + 'app.404.css')
        .set('Accept', 'text/html,application/xhtml+xml,application/xml')
        .end(function (err, res) {
          if (err) {
            // skip
          }
          browser.assert.ok(res.status !== 404, 'we need to let react handle this')
          done()
        })
    }).end()
  },
  'it should not return a 404 for a normal page': (browser) => {
    browser.perform(function (done) {
      request
        .get('http://localhost:3000/home')
        .set('Accept', 'text/html,application/xhtml+xml,application/xml')
        .end(function (err, res) {
          if (err) {
            // skip
          }
          browser.assert.ok(res.status !== 404, 'we need to let react handle this')
          done()
        })
    }).end()
  }
}
