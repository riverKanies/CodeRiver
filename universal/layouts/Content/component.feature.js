/* eslint-disable */
import { browserConfig, baseUrl } from '../../../tests/browser/config'
import Nightmare from 'nightmare'

describe('ContentView', () => {
  it('should render markdown', (done) => {
    var browser = Nightmare(browserConfig)
    browser
      .goto(baseUrl + '/thrive/privacy')
      .wait('#contentView')
      .evaluate(() => {
        return document.querySelector('h1').innerText
      })
      .end()
      .then((link) => {
        expect(link).toContain(`Privacy`)
        done()
      })
      .catch((error) => {
        console.error('Failed:', error)
      })
  })

  xit('should handle a 404 request', (done) => {
    var browser = Nightmare(browserConfig)
    browser
      .goto(baseUrl + '/thrive/nothinghere')
      .wait('#pageNotFound')
      .evaluate(() => {
        return document.querySelector('#pageNotFound').innerText
      })
      .end()
      .then((pageNotFound) => {
        expect(pageNotFound).toContain(`Page Not Found`)
        done()
      })
      .catch((error) => {
        console.error('Failed:', error)
      })
  })
})
