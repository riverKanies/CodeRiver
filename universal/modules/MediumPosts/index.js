/* @flow */
import * as http from 'utils/http'
import baseActions from 'modules/baseActions'

// Name
export const KEY = 'medium-posts'

// Action Creators
export const actions = { ...baseActions(KEY) }

// Reducer
export const initialState = {
  list: [],
  fetchPending: false
}

export function reducer (state = initialState, action) {
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
export function loadMediumPosts () {
  return {
    types: [
      actions.fetchPending,
      actions.fetchSuccess,
      actions.fetchFailure
    ],
    callAPI: () => http.httpGet('/api/medium/stories')
  }
}
