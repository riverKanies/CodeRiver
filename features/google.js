module.exports = {
  '@disabled': true,
  'Demo test Google': (browser) => {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(3000)
      .assert.containsText('#main', 'Night Watch')
      .end()
  }
}
