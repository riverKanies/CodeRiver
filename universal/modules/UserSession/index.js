/* @flow */
import { httpGet, httpPost, httpDelete, clearHeaders } from 'lib/http'
import baseActions from 'modules/baseActions'

// Name
export const KEY = 'user-session'

// Action Creators
export const actions = {
  ...baseActions(KEY),
  registerPostLoginSSO: `${KEY}/register-post-login-sso`,
  clearPostLoginSSO: `${KEY}/clear-post-login-sso`
}

// Reducer
export const initialState = {
  sessionAlive: false,
  userData: null,
  requestPending: false,
  postLoginSSO: {
    provider: null,
    redirectTo: null
  }
}

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.deletePending:
    case actions.fetchPending:
    case actions.createPending:
      return { ...state, requestPending: true }

    case actions.deleteFailure:
    case actions.deleteSuccess:
      return initialState

    case actions.fetchSuccess:
    case actions.createSuccess:
      return {
        ...state,
        requestPending: false,
        userData: action.data.data,
        sessionAlive: true
      }

    case actions.fetchFailure:
    case actions.createFailure:
      return {
        ...state,
        requestPending: false,
        userData: null
      }

    case actions.clearPostLoginSSO:
      return {
        ...state,
        postLoginSSO: initialState.postLoginSSO
      }

    case actions.registerPostLoginSSO:
      return {
        ...state,
        postLoginSSO: {
          provider: action.provider,
          returnTo: action.returnTo
        }
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
    callAPI: () => httpGet('/api/auth/validate_token'),
    failureCallback: () => clearHeaders()
  }
}

export function createSession (data: any) {
  return {
    types: [
      actions.createPending,
      actions.createSuccess,
      actions.createFailure
    ],
    callAPI: () => httpPost('/api/auth/sign_in', data),
    failureCallback: () => clearHeaders()
  }
}

export function deleteSession () {
  return {
    types: [
      actions.deletePending,
      actions.deleteSuccess,
      actions.deleteFailure
    ],
    callAPI: () => httpDelete('/api/auth/sign_out'),
    successCallback: () => clearHeaders()
  }
}

export function clearPostLoginSSO () {
  return {
    type: actions.clearPostLoginSSO
  }
}

export function registerPostLoginSSO (returnTo: string, provider: string = 'shopify') {
  return {
    type: actions.registerPostLoginSSO,
    provider,
    returnTo
  }
}
