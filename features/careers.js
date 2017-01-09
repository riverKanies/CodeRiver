module.exports = {
  'Renders the Careers page': function (browser) {
    browser
      .url(browser.globals.local_url + 'careers')
      .waitForElementVisible('#textBannerTitle', 1000)
      .assert.containsText('h1', 'Mission')
      .end()
  }
}
