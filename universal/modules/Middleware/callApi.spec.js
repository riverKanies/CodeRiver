import callAPIMiddleware from './callApi'

const createFakeStore = fakeData => ({
  getState() {
    return fakeData
  }
})

const dispatchWithStoreOf = (storeData, action) => {
  let dispatched = null

  const dispatch = callAPIMiddleware(
    createFakeStore(storeData)
  )(actionAttempt => dispatched = actionAttempt)

  dispatch(action)
  return dispatched
}

describe('middleware', () => {
  it('should require type to be an array of three strings', () => {
    const incorrectAction = {
      types: [
        'REQUEST_TYPE',
        'SUCCESS_TYPE'
      ],
      callAPI: () => jest.fn()
    }

    expect(() => {
      dispatchWithStoreOf({}, incorrectAction)
    }).toThrowError('Expected an array of three string types.')
  })

  it('should require callAPI to be a function', () => {
    const incorrectAction = {
      types: [
        'REQUEST_TYPE',
        'SUCCESS_TYPE',
        'FAILURE_TYPE'
      ],
      callAPI: true
    }

    expect(() => {
      dispatchWithStoreOf({}, incorrectAction)
    }).toThrowError('Expected callAPI to be a function.')
  })

  it('should observe shouldCallAPI()', () => {
    var shouldCallAPI = jest.fn(() => false)
    var callAPI = jest.fn()
    const action = {
      types: [
        'REQUEST_TYPE',
        'SUCCESS_TYPE',
        'FAILURE_TYPE'
      ],
      callAPI: callAPI,
      shouldCallAPI: shouldCallAPI
    }

    dispatchWithStoreOf({}, action)

    expect(shouldCallAPI.mock.calls.length).toBe(1)
    expect(callAPI.mock.calls.length).toBe(0)
  })
})
