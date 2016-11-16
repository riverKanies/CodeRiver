import { SubmissionError } from 'redux-form'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { genFormHandler } from './formHelpers'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('genFormHandler', () => {

  const initialAction = (data) => (dispatch) => {
    dispatch({ type: 'INITIAL_ACTION', data })
    return Promise.resolve(data)
  }

  const rejectedAction = (data) => (dispatch) => {
    dispatch({ type: 'INITIAL_ACTION', data })
    return Promise.reject({ error_1: 'there was an error'})
  }

  const successCallback = (data, dispatch) => {
    dispatch({ type: 'SUCCESS_ACTION', data })
    return Promise.resolve(data)
  }


  it('happy path, triggeres all the things you expect and deserve', () => {
    const store = mockStore({})
    const data = { user: 'xxxx' }
    const expected = [
      {"data": {"user": "xxxx"}, "type": "INITIAL_ACTION"},
      {"data": {"user": "xxxx"}, "type": "SUCCESS_ACTION"}
    ]

    return genFormHandler({
      action: initialAction,
      onSuccess: successCallback
    })(data, store.dispatch)
    .then(() => expect(store.getActions()).toEqual(expected))

  })

  it('default sad path, propogates errors and raises redux form exception', () => {
    const store = mockStore({})
    const data = { user: 'xxxx' }

    function weShouldNotBeHere (e) {
      // we should not hit this state, test should be raising an error
      throw new Error(e)
    }

    function expectations(e) {
      const expectedErrors = { errors: { error_1: 'there was an error' } }
      const dispatchedActions = [
        {"data": {"user": "xxxx"}, "type": "INITIAL_ACTION"}
      ]

      expect(store.getActions()).toEqual(dispatchedActions)
      return expect(e).toEqual(new SubmissionError(expectedErrors))
    }

    return genFormHandler({
      action: rejectedAction,
      onSuccess: successCallback,
    })(data, store.dispatch)
    .then(weShouldNotBeHere, expectations)
  })

  it('custom sad path', () => {
    const store = mockStore({})
    const data = { user: 'xxxx' }

    function weShouldNotBeHere (e) {
      // we should not hit this state, test should be raising an error
      throw new Error(e)
    }

    function expectedError(e) {
      const dispatchedActions = [
        {"data": {"user": "xxxx"}, "type": "INITIAL_ACTION"},
        {"data": {"error_1": "there was an error"}, "type": "FAILURE_ACTION"}
      ]

      expect(store.getActions()).toEqual(dispatchedActions)
      return expect(e).toEqual(new Error('oh hai'))
    }

    const failureAction = (data, dispatch) => {
      dispatch({ type: 'FAILURE_ACTION', data })
      return Promise.reject(new Error('oh hai'))
    }

    return genFormHandler({
      action: rejectedAction,
      onSuccess: successCallback,
      onFailure: failureAction
    })(data, store.dispatch)
    .then(weShouldNotBeHere, expectedError)
  })
})
