var request = require('superagent')

module.exports = {
  'it should return a reasonable robots by default': (browser) => {
    browser.perform(function (done) {
      request
        .get(browser.globals.local_url + 'robots.txt')
        .set('Accept', 'text/html,application/xhtml+xml,application/xml')
        .end(function (err, res) {
          if (err) {
            // skip
          }
          browser.assert.ok(res.status === 200, 'we got a valid response')
          browser.assert.ok(res.text === 'User-agent: *\nDisallow:\n', 'default robots')
          done()
        })
    }).end()
  }
}
