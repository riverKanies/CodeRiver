module.exports = {
  'ContentView renders markdown': function (browser) {
    browser
      .url(browser.globals.local_url + 'thrive/privacy')
      .waitForElementVisible('#contentView', 1000)
      .assert.containsText('h1', 'Privacy')
      .end()
  },
  'ContentView handles a 404 request': function (browser) {
    browser
      .url(browser.globals.local_url + 'thrive/nothinghere')
      .waitForElementVisible('#pageNotFound', 1000)
      .assert.urlContains('404')
      .assert.containsText('#pageNotFound', 'Failure is not the opposite of success but a stepping stone to success.')
      .end()
  }
}
