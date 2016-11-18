import { reducer, initialState } from './index'

describe('(Redux) pathway', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })
  })
})

