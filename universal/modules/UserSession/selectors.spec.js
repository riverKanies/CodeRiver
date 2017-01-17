import { loginSelector, pulseSelector, subdomainSelector } from './selectors'
import { KEY } from 'modules/UserSession'
import * as http from 'lib/http'

describe("session loginSelector", () => {
  context("renderLoginForm", () => {
    it("should return true if requestPending and userData are both false", () => {
      const selected = loginSelector({
        [KEY]: {
          requestPending: false,
          userData: false
        }
      })

      expect(selected.renderLoginForm).toBe(true)
    })

    it("should return false if requestPending and userData are both true", () => {
      const selected = loginSelector({
        [KEY]: {
          requestPending: true,
          userData: true
        }
      })

      expect(selected.renderLoginForm).toBe(false)
    })

    it("should return false if requestPending is false and userData is true", () => {
      const selected = loginSelector({
        [KEY]: {
          requestPending: false,
          userData: true
        }
      })

      expect(selected.renderLoginForm).toBe(false)
    })

    it("should return false if requestPending is true userData is false", () => {
      const selected = loginSelector({
        [KEY]: {
          requestPending: true,
          userData: false
        }
      })

      expect(selected.renderLoginForm).toBe(false)
    })
  })
})

describe("subdomain selector", () => {
  it("should return the current subdomain", () => {
    http.subdomain = jest.fn(() => 'accenture')

    const selected = subdomainSelector({
      [KEY]: {
        subdomain: 'accenture'
      }
    })

    expect(selected.subdomain).toEqual('accenture')
  })
})
