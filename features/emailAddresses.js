module.exports = {
  'About Corporate page has the correct email': function (browser) {
    browser
      .url(browser.globals.local_url + 'about/corporate')
      .waitForElementVisible('#aboutCorporateEmail', 1000)
      .assert.containsText('#aboutCorporateEmail', 'corporate@thriveglobal.com')
      .end()
  },
  'About Content page has the correct email': function (browser) {
    browser
      .url(browser.globals.local_url + 'about/content')
      .waitForElementVisible('#aboutContentEmail', 1000)
      .assert.containsText('#aboutContentEmail', 'media@thriveglobal.com')
      .end()
  },
  'About Commerce page has the correct email': function (browser) {
    browser
      .url(browser.globals.local_url + 'about/commerce')
      .waitForElementVisible('#aboutCommerceEmail', 1000)
      .assert.containsText('#aboutCommerceEmail', 'commerce@thriveglobal.com')
      .end()
  }
}
