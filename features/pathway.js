module.exports = {
  'Pathway': (browser) => {
    browser
      .url(browser.globals.local_url + 'pathways/1')
      .waitForElementVisible('#pathway_container', 1000)
      .elements('css selector', '#pathway_container > a', (result) => {
        browser.assert.equal(result.value.length > 0, true, 'journeys are displayed')
      })
      .end()
  }
}
