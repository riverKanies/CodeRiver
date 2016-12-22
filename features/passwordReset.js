module.exports = {
  'clicks the reset password link and go to reset-password page': function (browser) {
    browser
      .url(browser.globals.local_url + 'login')
      .waitForElementVisible('#header', 1000)
      .click('#resetPassword')
      .pause(1000)
      .assert.urlContains('reset-password')
      .waitForElementVisible('h1', 1000)
      .assert.containsText('h1', 'Reset Password')
      .end()
  }
}
