module.exports = {
  'Renders the Press page': function (browser) {
    browser
      .url(browser.globals.local_url + 'contact')
      .waitForElementVisible('#textBannerTitle', 1000)
      .assert.containsText('h1', 'Contact Thrive Global')
      .end()
  }
}
