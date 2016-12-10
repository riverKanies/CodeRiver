module.exports = {
  'MicrostepList shows a list of microsteps': (browser) => {
    browser
      .url(browser.globals.local_url + 'microsteps')
      .waitForElementVisible('#microstepList', 1000)
      .assert.attributeEquals('input', 'placeholder', 'Search Microsteps', 'Search input is displayed')
      .elements('css selector', '#microstepList > li', (result) => {
        browser.assert.equal(result.value.length > 0, true, 'Microsteps are displayed')
      })
      .end()
  },
  'MicrostepList filters microsteps based on search input': (browser) => {
    var totalLiCount = 0

    browser
      .url(browser.globals.local_url + 'microsteps')
      .waitForElementVisible('#microstepList', 1000)
      .elements('css selector', '#microstepList > li', (result) => {
        totalLiCount = result.value.length
      })
      .setValue('input[placeholder="Search Microsteps"]', 'jedi')
      .elements('css selector', '#microstepList > li', (result) => {
        browser.assert.equal(result.value.length < totalLiCount, true, 'results are filtered')
      })
      .end()
  }
}
