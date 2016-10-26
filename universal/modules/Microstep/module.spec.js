import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import thunk from 'redux-thunk'

import callAPI from 'modules/Middleware/callApi'
import { reducer, initialState, actions, loadMicrostep } from './index'
import { HOST_URL } from 'utils/http'

const middlewares = [ thunk, callAPI ]
const mockStore = configureMockStore(middlewares)

describe('Microstep module', () => {
  describe('REDUCER', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle fetchPending', () => {
      expect(
        reducer({ ...initialState, fetchPending : false }, {
          type: actions.fetchPending,
        })
      ).toEqual(
        {
          ...initialState,
          fetchPending: true
        }
      )
    })

    it('should handle fetchSuccess', () => {
      expect(
        reducer({ ...initialState, fetchPending : true }, {
          type: actions.fetchSuccess,
          data: {oh: 'hi'}
        })
      ).toEqual(
        {
          ...initialState,
          fetchPending: false,
          data: {oh: 'hi'}
        }
      )
    })

    it('should handle fetchFailure', () => {
      expect(
        reducer({ ...initialState, fetchPending : true }, {
          type: actions.fetchFailure
        })
      ).toEqual(
        {
          ...initialState,
          fetchPending: false
        }
      )
    })
  })

  describe('ACTIONS', () => {
    context('loadMicrostep', () => {
      it('loadMicrostep dispatches happy path actions and calls api', () => {
        nock(HOST_URL)
          .get('/api/microsteps/1?type=informational')
          .reply(200, {})

        const expectedActions = [
            { type: actions.fetchPending },
            { type: actions.fetchSuccess, data: {} }
        ]

        const store = mockStore({})

        return store.dispatch(loadMicrostep('1', 'informational'))
          .then(() => { // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
          })
      })

      it('loadMicrostep dispatches sad path actions and calls api', () => {
        nock(HOST_URL)
          .get('/api/microsteps/fail?type=informational')
          .reply(404, {})

        const expectedActions = [
            { type: actions.fetchPending },
            { type: actions.fetchFailure, error: {} }
        ]

        const store = mockStore({})

        return store.dispatch(loadMicrostep('fail', 'informational'))
          .then(() => { // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
          })
      })
    })
  })
})
