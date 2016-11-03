/* eslint-disable */
import { browser, baseUrl } from '../../../tests/browser/config'

describe('ContentView', () => {
  it('should render markdown', async (done) => {
    await browser
      .goto(baseUrl + '/contact')
      .wait('#root')
      .evaluate(function () {
        return document.querySelector('h1').innerText
      })
      .end()
      .then(function (link) {
        expect(link).toContain(`Contact`)
        done()
      })
      .catch(function (error) {
        console.error('Failed:', error)
      })
  })
})
