/* @flow */
import { httpGet, httpPut, httpPost } from 'lib/http'
import baseActions from 'modules/baseActions'

// Name
export const KEY = 'user-session'

// Action Creators
export const actions = { ...baseActions(KEY) }

// Reducer
export const initialState = {
  sessionAlive: false,
  userData: null,
  requestPending: false
}

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.fetchPending:
      return { ...state, requestPending: true }

    case actions.fetchSuccess:
      return {
        ...state,
        requestPending: false,
        userData: action.data.data,
        sessionAlive: true
      }

    case actions.createSuccess:
      return {
        ...state,
        requestPending: false,
        userData: action.data.data,
        sessionAlive: true
      }

    default:
      return state
  }
}

export function checkSession () {
  return {
    types: [
      actions.fetchPending,
      actions.fetchSuccess,
      actions.fetchFailure
    ],
    callAPI: () => httpGet('/api/auth/validate_token')
  }
}

export function createSession () {
  return {
    types: [
      actions.createPending,
      actions.createSuccess,
      actions.createFailure
    ],
    callAPI: () => httpPost('/api/auth/sign_in')
  }
}
