/* @flow */
import { httpGet } from 'utils/http'
import baseActions from 'modules/baseActions'

// Name
export const KEY = 'microstep'

// Constants
export const constants = { }

// Action Creators
export const actions = { ...baseActions(KEY) }

// Reducer
export const initialState = {
  data: undefined,
  fetchPending: false
}

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.fetchPending:
      return {
        ...state,
        fetchPending: true
      }

    case actions.fetchSuccess:
      return {
        ...state,
        data: action.data,
        fetchPending: false
      }

    case actions.fetchFailure:
      return {
        ...state,
        fetchPending: false
      }

    default:
      return state
  }
}

export function loadMicrostep (id: string, stepType: string) {
  return {
    types: [
      actions.fetchPending,
      actions.fetchSuccess,
      actions.fetchFailure
    ],
    callAPI: () => httpGet(`/api/microsteps/${id}?type=${stepType}`)
  }
}
