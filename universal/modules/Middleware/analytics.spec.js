import analyticsMiddleware from './analytics'
import segment from 'lib/segment'

const createFakeStore = fakeData => ({
  getState() {
    return fakeData
  }
})

const dispatchWithStoreOf = (storeData, action) => {
  let dispatched = null
  const dispatch = analyticsMiddleware(createFakeStore(storeData))(actionAttempt => dispatched = actionAttempt)
  dispatch(action)
  return dispatched
}

describe('middleware', () => {
  beforeAll(() => {
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

    // Reassign this so the number of method calls is reset to 0.
    segment.page = jest.genMockFunction()

    const action = {
      type: 'LOCATION_CHANGE'
    }

    expect(segment.page.mock.calls.length).toBe(0)
    dispatchWithStoreOf({}, action)
    expect(segment.page.mock.calls.length).toBe(1)
  })
})
