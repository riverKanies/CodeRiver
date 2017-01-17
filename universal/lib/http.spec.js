import { subdomain } from './http'

describe("subdomain", () => {
  context("with canonical url", () => {
    it("should return the domain", () => {
      const locationMock = {
        hostname: 'google.com'
      }

      expect(subdomain(locationMock)).toEqual('www')
    })
  })
  context("without canonical url", () => {
    it("should return 'www'", () => {
      const locationMock = {
        hostname: null
      }

      expect(subdomain(locationMock)).toEqual('www')
    })
  })
  context("without canonical url, and with a subdomain", () => {
    it("should return the subdomain", () => {
      const locationMock = {
        hostname: 'mail.google.com'
      }

      expect(subdomain(locationMock)).toEqual('mail')
    })
  })
})
