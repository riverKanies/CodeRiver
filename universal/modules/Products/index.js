import { httpGet } from 'utils/http'
import baseActions from 'modules/baseActions'

// Name
export const KEY = 'products'

// Constants
export const constants = { }

// Action Creators (Types)
export const actions = { ...baseActions(KEY) }

// Reducer
export const initialState = {
  list: []
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actions.fetchSuccess:
      return { ...state, list: action.data }

    default:
      return state
  }
}

// Actions
export function loadMicrosteps () {
  return {
    types: [
      actions.fetchPending,
      actions.fetchSuccess,
      actions.fetchFailure
    ],
    callAPI: () => httpGet('/api/microsteps')
  }
}

export default {
  KEY, reducer
}
