module.exports = {
  'Pathway': function (browser) {
    browser
      .url('localhost:3000/pathways/1')
      .waitForElementVisible('#pathway_container', 1000)
      .elements('css selector', '#pathway_container > a', function (result) {
        browser.assert.equal(result.value.length, 3, 'Journeys are displayed')
      })
      .end()
  }
}
