module.exports = {
  'Journey': (browser) => {
    browser
      .url(browser.globals.local_url + 'pathways/1/journeys/1')
      .waitForElementVisible('#journeys', 1000)
      .elements('css selector', '#journeys > div', (result) => {
        browser.assert.equal(result.value.length > 0, true, 'Microsteps are displayed')
      })
      .end()
  }
}
