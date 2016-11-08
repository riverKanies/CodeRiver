/* eslint-disable */
import { browser, baseUrl } from '../browser/config'

describe('Booster Kit Nav', () => {
  it('should find the about link', async (done) => {
    await browser
      .goto(baseUrl)
      .wait('#header')
      .evaluate(function () {
        return document.querySelector("#linkHome").href
      })
      .end()
      .then(function (link) {
        expect(link).toEqual(`${baseUrl}/`)
        done()
      })
      .catch(function (error) {
        console.error('Search failed:', error)
      })
  })
})
