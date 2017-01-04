module.exports = {
  'Renders the signup page': function (browser) {
    browser
      .url(browser.globals.local_url + 'signup')
      .waitForElementVisible('#header', 1000)
      .assert.containsText('h1', 'Sign up to start thriving')
      .end()
  },
  'Can fill out the form': function (browser) {
    var timestamp = Date.now()
    browser
      .url(browser.globals.local_url + 'signup')
      .waitForElementVisible('#header', 1000)
      .assert.containsText('h1', 'Sign up to start thriving')
      .setValue('input[name=email]', `test${timestamp}@email.com`)
      .setValue('input[name=password]', 'password1234')
      .setValue('input[name=password_confirmation]', 'password1234')
      .click('#signupSubmit')
      .pause(1000)
      .assert.urlContains('success')
      .end()
  }
}
