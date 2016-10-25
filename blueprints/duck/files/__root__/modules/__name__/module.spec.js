import { reducer, initialState } from './<%= camelEntityName %>'

describe('(Redux) <%= camelEntityName %>', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).to.eql(initialState)
    })
  })
})
