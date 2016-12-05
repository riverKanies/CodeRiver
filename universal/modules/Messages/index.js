/* @flow */
// Name
export const KEY = 'messages'

// Action Creators
export const actions = {
  createMessage: `${KEY}/create-message`,
  clearMessages: `${KEY}/clear-messages`
}

// Reducer
export const initialState = { }

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.createMessage:
      return {
        ...state,
        [action.key]: action.value
      }

    case actions.clearMessages:
      return initialState

    default:
      return state
  }
}

export function createMessage (key, value) {
  return {
    type: actions.createMessage,
    key,
    value
  }
}

export function clearMessages () {
  return {
    type: actions.clearMessages
  }
}
