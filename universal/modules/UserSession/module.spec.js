import { reducer, initialState } from './index'

describe('(Redux) userSession', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })
  })
})
