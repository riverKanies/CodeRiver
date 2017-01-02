import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import thunk from 'redux-thunk'
import callAPI from 'modules/Middleware/callApi'
import { HOST_URL, CLIENT_URL } from 'lib/http'
import {
  reducer,
  initialState,
  actions,
  registerPostLoginSSO,
  clearPostLoginSSO,
  requestResetPassword
} from './index'

const genericError = {
  error: "there was an error processing request"
}

const middlewares = [ thunk, callAPI ]
const mockStore = configureMockStore(middlewares)

describe('UserSession module', () => {
  describe('REDUCER', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    context('requestPending attribtue', () => {
      it('should handle fetchPending & createPending', () => {
        expect(
          reducer({ ...initialState, requestPending : false }, {
            type: actions.createPending,
          })
        ).toEqual(
          {
            ...initialState,
            requestPending: true
          }
        )

        expect(
          reducer({ ...initialState, requestPending : false }, {
            type: actions.fetchPending,
          })
        ).toEqual(
          {
            ...initialState,
            requestPending: true
          }
        )
      })

      it('should handle fetchSuccess & createSuccess', () => {
        expect(
          reducer({ ...initialState, requestPending: true }, {
            type: actions.createSuccess,
            data: { data: 'userdata' }
          }).requestPending
        ).toEqual(false)
        expect(
          reducer({ ...initialState, requestPending: true }, {
            type: actions.fetchSuccess,
            data: { data: 'userdata' }
          }).requestPending
        ).toEqual(false)
      })

      it('should handle fetchFailure', () => {
        expect(
          reducer({ ...initialState, requestPending: true }, {
            type: actions.createFailure
          }).requestPending
        ).toEqual(false)

        expect(
          reducer({ ...initialState, requestPending: true }, {
            type: actions.fetchFailure
          }).requestPending
        ).toEqual(false)
      })

    })
  })

  context('postLoginSSO', () => {
    it('should handle clearPostLoginSSO', () => {
      const r = reducer({
        ...initialState,
        postLoginSSO: { provider: 'provider', returnTo: 'http://redirecttome' }
      }, clearPostLoginSSO('http://redirecttome', 'provider'))

      expect(r).toEqual(initialState)
    })

    it('should handle registerPostLoginSSO', () => {
      const r = reducer(
        { ...initialState },
        registerPostLoginSSO('http://redirecttome', 'provider'))

      expect(r).toEqual({
        ...initialState, postLoginSSO: {
          provider: 'provider', returnTo: 'http://redirecttome'
        }
      })
    })
  })

  context('requestResetPassword', () => {
    it('dispatches update pending and update failure on failure', () => {
      nock(HOST_URL)
        .post('/api/auth/password')
        .reply(401, [])

      const expectedActions = [
        { type: actions.reqPassResetPending },
        { type: actions.reqPassResetFailure, error: genericError }
      ]

      const data = { email: 'bill@email.com' }
      const store = mockStore({})

      return store.dispatch(requestResetPassword(data))
        .then(
          () => expect(false).toEqual(true),
          () => expect(store.getActions()).toEqual(expectedActions)
        )
    })

    it('dispatches update pending and update success when successful', () => {
      const expectedBody = {
        email: 'bill@email.com',
        redirect_url: `${CLIENT_URL}/reset-password`
      }
      nock(HOST_URL)
        .post('/api/auth/password', expectedBody)
        .reply(200, [])

      const expectedActions = [
        { type: actions.reqPassResetPending },
        { type: actions.reqPassResetSuccess, data: [] }
      ]

      const data = { email: 'bill@email.com' }
      const store = mockStore({})

      return store.dispatch(requestResetPassword(data))
        .then(
          () => expect(store.getActions()).toEqual(expectedActions),
          () => expect(false).toEqual(true)
        )
    })
  })
})
