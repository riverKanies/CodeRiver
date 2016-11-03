import analyticsMiddleware from './analytics'
import segment from 'lib/segment'

const createFakeStore = fakeData => ({
  getState() {
    return fakeData
  }
})

const dispatchWithStoreOf = (storeData, action) => {
  let dispatched = null

  const dispatch = analyticsMiddleware(
    createFakeStore(storeData)
  )(actionAttempt => dispatched = actionAttempt)

  dispatch(action)
  return dispatched
}

describe('middleware', () => {
  context('LOCATION_CHANGE', () => {
    beforeEach(() => {
      segment.page = jest.genMockFunction()
    })

    it('should dispatch if store is empty', () => {
      const action = {
        type: 'LOCATION_CHANGE'
      }

      expect(
        dispatchWithStoreOf({}, action)
      ).toEqual(action)
    })

    it('should run segment.page when the location changes', () => {
      const action = {
        type: 'LOCATION_CHANGE'
      }

      expect(segment.page.mock.calls.length).toBe(0)
      dispatchWithStoreOf({}, action)
      expect(segment.page.mock.calls.length).toBe(1)
    })
  })

  context('LEAD_FORM_SUBMITTED', () => {
    beforeEach(() => {
      segment.track = jest.genMockFunction()
    })

    it('should dispatch if store is empty', () => {
      const action = {
        type: 'LEAD_FORM_SUBMITTED',
        track: { email: 'sample@email.com' }
      }

      expect(
        dispatchWithStoreOf({}, action)
      ).toEqual(action)
    })

    it('should run segment.track when the location changes', () => {
      const action = {
        type: 'LEAD_FORM_SUBMITTED',
        track: { email: 'sample@email.com' }
      }

      expect(segment.track.mock.calls.length).toBe(0)
      dispatchWithStoreOf({}, action)
      expect(segment.track.mock.calls.length).toBe(1)
    })
  })
})
