/* @flow */
import {
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
  clearHeaders
} from 'lib/http'

import baseActions from 'modules/baseActions'

// Name
export const KEY = 'user-session'

// Action Creators
export const actions = {
  ...baseActions(KEY),
  registerPostLoginSSO: `${KEY}/register-post-login-sso`,
  clearPostLoginSSO: `${KEY}/clear-post-login-sso`,
  clearUserMessage: `${KEY}/clear-user-message`,
  clearPasswordMessage: `${KEY}/clear-password-message`,
  setUserMessage: `${KEY}/set-user-message`,
  setPasswordMessage: `${KEY}/set-password-message`
}

// Reducer
export const initialState = {
  sessionAlive: false,
  userData: null,
  requestPending: false,
  userMessage: null,
  passwordMessage: null,
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
    case actions.updatePending:
      return {
        ...state,
        requestPending: true,
        userMessage: null,
        passwordMessage: null
      }

    case actions.clearPasswordMessage:
    case actions.clearUserMessage:
      return {
        ...state,
        userMessage: null,
        passwordMessage: null
      }

    case actions.setUserMessage:
      return {
        ...state,
        userMessage: action.message
      }

    case actions.setPasswordMessage:
      return {
        ...state,
        passwordMessage: action.message
      }

    case actions.deleteFailure:
    case actions.deleteSuccess:
      return initialState

    case actions.updateSuccess:
      return {
        ...state,
        requestPending: false,
        userData: action.data.data,
        sessionAlive: true,
        message: 'update success!'
      }

    case actions.fetchSuccess:
    case actions.createSuccess:
      return {
        ...state,
        requestPending: false,
        userData: action.data.data,
        sessionAlive: true
      }

    case actions.updateFailure:
      return {
        ...state,
        requestPending: false
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

export function updatePassword (data: any) {
  return {
    types: [
      actions.updatePending,
      actions.updateSuccess,
      actions.updateFailure
    ],
    callAPI: () => httpPut('/api/auth', data)
  }
}

export function updateSession (data: any) {
  const annotatedData = { ...data }
  annotatedData['gimme_communications'] = data['gimme_communications'] || false
  annotatedData['gimme_newsletters'] = data['gimme_newsletters'] || false
  return {
    types: [
      actions.updatePending,
      actions.updateSuccess,
      actions.updateFailure
    ],
    callAPI: () => httpPut('/api/auth', annotatedData)
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

export function clearUserMessage (message) {
  return {
    type: actions.clearUserMessage
  }
}

export function clearPasswordMessage (message) {
  return {
    type: actions.clearPasswordMessage
  }
}

export function setUserMessage (message) {
  return {
    type: actions.setUserMessage,
    message
  }
}

export function setPasswordMessage (message) {
  return {
    type: actions.setPasswordMessage,
    message
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
