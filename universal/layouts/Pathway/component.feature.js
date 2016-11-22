/* eslint-disable */
import { browserConfig, baseUrl } from '../../../tests/browser/config'
import Nightmare from 'nightmare'

Nightmare.action('getTotalLiCount', function extendNightmare(done) {
  this.evaluate_now(() => (
    document.querySelectorAll('li').length
  ), done)
})

describe('Pathway', () => {
  it('should show a list of journeys', (done) => {
    var browser = Nightmare(browserConfig)
    browser
      .goto(baseUrl + '/pathways/1')
      .wait('#pathway_container')
      .evaluate(function () {
        return document.querySelector('#journey_link').href
      })
      .end()
      .then(function (link) {
        expect(link).toContain(`pathways/1/journey`)
        done()
      })
      .catch(function (error) {
        console.error('Failed:', error)
      })
  })
})
