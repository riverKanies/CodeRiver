module.exports = {
  'Renders the Corporate Pledge page': function (browser) {
    browser
      .url(browser.globals.local_url + 'corporate-pledge')
      .waitForElementVisible('header', 1000)
      .assert.containsText('h1', 'Pledge To Thrive')
      .end()
  }
}
