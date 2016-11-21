/* eslint-disable */
import { browserConfig, baseUrl } from '../../../tests/browser/config'
import Nightmare from 'nightmare'

Nightmare.action('getTotalLiCount', function extendNightmare(done) {
  this.evaluate_now(() => (
    document.querySelectorAll('li').length
  ), done)
})

describe('MicrostepList', () => {
  it('should show a list of microsteps', (done) => {
    var browser = Nightmare(browserConfig)
    browser
      .goto(baseUrl + '/microsteps')
      .wait('#microstepList')
      .evaluate(function () {
        return document.querySelector('input').placeholder
      })
      .end()
      .then(function (link) {
        expect(link).toContain(`Search Microsteps`)
        done()
      })
      .catch(function (error) {
        console.error('Failed:', error)
      })
  })

  it('should filter microsteps based on search input', (done) => {
    var browser = Nightmare(browserConfig)
    var totalLiCount = 0

    browser
      .goto(baseUrl + '/microsteps')
      .wait('#microstepList')
      .getTotalLiCount()
      .then(function(totalLiCount) {
        browser
          .type('input[placeholder="Search Microsteps"]', 'rock and roll')
          .getTotalLiCount()
          .end()
          .then((count) => {
            expect(count).toBeLessThan(totalLiCount)
            done()
          })
          .catch((error) => {
            console.error('Failed:', error)
          })
      })
  })
})
