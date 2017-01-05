module.exports = {
  'Renders the login page': function (browser) {
    browser
      .url(browser.globals.local_url + 'login')
      .waitForElementVisible('#login', 1000)
      .assert.containsText('h1', 'Log In')
      .end()
  },
  'User can login': function (browser) {
    browser
      .url(browser.globals.local_url + 'login')
      .waitForElementVisible('#login', 1000)
      .setValue('input[name=email]', `test@test.com`)
      .setValue('input[name=password]', 'testington')
      .click('#loginSubmit')
      .pause(1000)
      .assert.urlContains('profile')
      .assert.containsText('h1', 'Welcome, test@test.com')
      .end()
  },
  'User can logout': function (browser) {
    // DRY this up a bit.
    browser
      .url(browser.globals.local_url + 'login')
      .waitForElementVisible('#login', 1000)
      .setValue('input[name=email]', `test@test.com`)
      .setValue('input[name=password]', 'testington')
      .click('#loginSubmit')
      .pause(1000)
      .assert.urlContains('profile')
      .assert.containsText('h1', 'Welcome, test@test.com')
      .click('#navLogout')
      .waitForElementVisible('#home', 1000)
      .end()
  },
  'User is redirected based on url parameter passed': function (browser) {
    browser
      .url(browser.globals.local_url + 'login?return_to=http://google.com')
      .waitForElementVisible('#login', 1000)
      .setValue('input[name=email]', `test@test.com`)
      .setValue('input[name=password]', 'testington')
      .click('#loginSubmit')
      .pause(1000)
      .assert.urlContains('google.com')
      .end()
  }
}
