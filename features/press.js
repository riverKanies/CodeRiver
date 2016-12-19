module.exports = {
  'Renders the Press page': function (browser) {
    browser
      .url(browser.globals.local_url + 'press')
      .waitForElementVisible('#textBannerTitle', 1000)
      .assert.containsText('h1', 'Press')
      .end()
  }
}
