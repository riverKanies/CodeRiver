/* eslint-disable */
import { browserConfig, baseUrl } from '../../../tests/browser/config'
import Nightmare from 'nightmare'

describe('Pathway', () => {
  it('should show a list of journeys', (done) => {
    var browser = Nightmare(browserConfig)
    browser
      .goto(baseUrl + '/pathways/1')
      .wait('#pathway_container')
      .evaluate(function () {
        return document.querySelectorAll('#pathway_container > a').length
      })
      .end()
      .then(function (links_count) {
        expect(links_count).toBeGreaterThan(0)
        done()
      })
      .catch(function (error) {
        console.error('Failed:', error)
      })
  })
})
