import selector from './selector'
import { KEY } from 'modules/UserSession'

describe("session selector", () => {
  context("renderLoginForm", () => {
    it("should return true if requestPending and userData are both false", () => {
      const selected = selector({
        [KEY]: {
          requestPending: false,
          userData: false
        }
      })

      expect(selected.renderLoginForm).toBe(true)
    })

    it("should return false if requestPending and userData are both true", () => {
      const selected = selector({
        [KEY]: {
          requestPending: true,
          userData: true
        }
      })

      expect(selected.renderLoginForm).toBe(false)
    })

    it("should return false if requestPending is false and userData is true", () => {
      const selected = selector({
        [KEY]: {
          requestPending: false,
          userData: true
        }
      })

      expect(selected.renderLoginForm).toBe(false)
    })

    it("should return false if requestPending is true userData is false", () => {
      const selected = selector({
        [KEY]: {
          requestPending: true,
          userData: false
        }
      })

      expect(selected.renderLoginForm).toBe(false)
    })
  })
})
