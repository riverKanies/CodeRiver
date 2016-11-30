/* eslint-disable */
import { browserConfig, baseUrl } from '../../../tests/browser/config'
import Nightmare from 'nightmare'

describe('ContentView', () => {
  it('should render markdown', (done) => {
    var browser = Nightmare(browserConfig)
    browser
      .goto(baseUrl + '/privacy')
      .wait('#contentView')
      .evaluate(function () {
        return document.querySelector('h1').innerText
      })
      .end()
      .then(function (link) {
        expect(link).toContain(`Privacy`)
        done()
      })
      .catch(function (error) {
        console.error('Failed:', error)
      })
  })
})
