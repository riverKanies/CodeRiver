/* eslint-disable */
import { browserConfig, baseUrl } from '../../../tests/browser/config'
import Nightmare from 'nightmare'

describe('Journey', () => {
  it('should show a list of microsteps', (done) => {
    var browser = Nightmare(browserConfig)
    browser
      .goto(baseUrl + '/pathways/1/journeys/1')
      .wait('#journeys')
      .evaluate(function () {
        return document.querySelectorAll('#journeys > div').length
      })
      .end()
      .then(function (microsteps_count) {
        expect(microsteps_count).toBeGreaterThan(0)
        done()
      })
      .catch(function (error) {
        console.error('Failed:', error)
      })
  })
})
