/* @flow */
import { httpGet } from 'utils/http'
import baseActions from 'modules/baseActions'

// Name
export const KEY = 'microsteps'

// Constants
export const constants = { }

// Action Creators (Types)
export const actions = { ...baseActions(KEY) }

// Reducer
export const initialState = {
  list: [],
  fetchPending: false
}

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.fetchSuccess:
      return { ...state, list: action.data, fetchPending: false }

    case actions.fetchPending:
      return { ...state, fetchPending: true }

    case actions.fetchFailure:
      return { ...state, fetchPending: false }

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
    callAPI: () => httpGet('/api/microsteps?type=informational')
  }
}
