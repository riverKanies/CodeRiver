import { loginSelector, pulseSelector } from './selectors'
import { KEY } from 'modules/UserSession'

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
