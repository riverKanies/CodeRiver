import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { reducer, initialState, actions, createAccount } from './index'
import callAPI from 'modules/Middleware/callApi'
import nock from 'nock'
import { httpPost, HOST_URL } from 'lib/http'

const genericError = {
  error: "there was an error processing request"
}
const middlewares = [ thunk, callAPI ]
const mockStore = configureMockStore(middlewares)

describe('SignUp', () => {
  describe('reducer', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle createPending', () => {
      expect(
        reducer({ ...initialState, createPending : false }, {
          type: actions.createPending,
        })
      ).toEqual(
        {
          ...initialState,
          createPending: true
        }
      )
    })

    it('should handle createSuccess', () => {
      expect(
        reducer({ ...initialState, createPending : true }, {
          type: actions.createSuccess,
          data: [1,2,3]
        })
      ).toEqual(
        {
          ...initialState,
          createPending: false,
          list: [1,2,3]
        }
      )
    })

    it('should handle createFailure', () => {
      expect(
        reducer({ ...initialState, createPending : true }, {
          type: actions.createFailure
        })
      ).toEqual(
        {
          ...initialState,
          createPending: false
        }
      )
    })
  })

  describe('actions', () => {
    context('createAccount', () => {
      it('createAccount dispatches happy path actions and calls api', () => {
        nock(HOST_URL)
          .post('/api/auth')
          .reply(200, [])

        const expectedActions = [
            { type: actions.createPending },
            { type: actions.createSuccess, data: [] }
        ]

        const store = mockStore({})

        return store.dispatch(createAccount())
          .then(() => { // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
          })
      })

      it('createAccount dispatches sad path actions and calls api', () => {
        nock(HOST_URL)
          .post('/api/auth')
          .reply(404, [])

        const expectedActions = [
            { type: actions.createPending },
            { type: actions.createFailure, error: genericError }
        ]

        const store = mockStore({})

        return store.dispatch(createAccount())
          .then(
            () => expect(false).toEqual(true),
            () => expect(store.getActions()).toEqual(expectedActions)
          )
      })
    })
  })
})
