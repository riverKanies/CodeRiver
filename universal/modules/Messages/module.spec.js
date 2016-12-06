import { reducer, initialState, createMessage, clearMessages } from './index'

describe('(Redux) messages', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('saves a given message to a given key', () => {
      expect(reducer(undefined, createMessage('key', 'value'))).toEqual(
        {...initialState, 'key': 'value' }
      )
    })

    it('clears all messages when asked', () => {
      const state = { key: 'value'}
      expect(reducer(state, clearMessages())).toEqual(initialState)
    })
  })
})

