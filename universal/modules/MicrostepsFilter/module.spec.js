import { actions, reducer, initialState, updateFilter, clearFilter } from './index'

describe('(Redux) microstepsFilter', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('updates the filter with update filter action', () => {
      expect(
        reducer({ ...initialState }, {
          type: actions.updateFilter,
          filter: 'filter!'
        })
      ).toEqual(
        {
          ...initialState,
          filter: 'filter!'
        }
      )
    })

    it('clears the filter with the clear filter action', () => {
      expect(
        reducer({ ...initialState, filter: 'non-empty' }, {
          type: actions.clearFilter,
        })
      ).toEqual(
        {
          ...initialState,
          filter: ''
        }
      )
    })
  })
})
