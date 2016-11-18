import { reducer, initialState } from './index'

describe('(Redux) pathways', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })
  })
})

