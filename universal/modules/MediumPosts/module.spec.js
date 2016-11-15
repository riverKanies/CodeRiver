import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { reducer, initialState, actions, loadMediumPosts } from './index'
import callAPI from 'modules/Middleware/callApi'
import nock from 'nock'
import { HOST_URL } from 'lib/http'

const genericError = {
  error: "there was an error processing request"
}

const middlewares = [ thunk, callAPI ]
const mockStore = configureMockStore(middlewares)

describe('MediumPosts', () => {
  describe('reducer', () => {
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
          data: [1,2,3]
        })
      ).toEqual(
        {
          ...initialState,
          fetchPending: false,
          list: [1,2,3]
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

  describe('actions', () => {
    context('loadMediumPosts', () => {
      it('loadMediumPosts dispatches happy path actions and calls api', () => {
        nock(HOST_URL)
          .get('/api/medium/stories')
          .reply(200, [])

        const expectedActions = [
            { type: actions.fetchPending },
            { type: actions.fetchSuccess, data: [] }
        ]

        const store = mockStore({})

        return store.dispatch(loadMediumPosts())
          .then(() => { // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
          })
      })

      it('loadMediumPosts dispatches sad path actions and calls api', () => {
        nock(HOST_URL)
          .get('/api/medium/stories')
          .reply(404, [])

        const expectedActions = [
            { type: actions.fetchPending },
            { type: actions.fetchFailure, error: genericError }
        ]

        const store = mockStore({})

        return store.dispatch(loadMediumPosts())
          .then(
            () => expect(false).toEqual(true),
            () => expect(store.getActions()).toEqual(expectedActions)
          )
      })
    })
  })
})
