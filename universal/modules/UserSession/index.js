/* @flow */
import {
  CLIENT_URL,
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
  clearHeaders,
  subdomain
} from 'lib/http'

import baseActions from 'modules/baseActions'

// Name
export const KEY = 'user-session'

// Action Creators
export const actions = {
  ...baseActions(KEY),
  reqPassResetPending: `${KEY}/request-password-reset-pending`,
  reqPassResetFailure: `${KEY}/request-password-reset-failure`,
  reqPassResetSuccess: `${KEY}/request-password-reset-success`,
  registerPostLoginSSO: `${KEY}/register-post-login-sso`,
  registerSubdomain: `${KEY}/register-subdomain`,
  clearPostLoginSSO: `${KEY}/clear-post-login-sso`,
  clearUserMessage: `${KEY}/clear-user-message`,
  clearPasswordMessage: `${KEY}/clear-password-message`,
  setUserMessage: `${KEY}/set-user-message`,
  setPasswordMessage: `${KEY}/set-password-message`,
  updateQuotePending: `${KEY}/update-quote-pending`,
  updateQuoteFailure: `${KEY}/update-quote-failure`,
  updateQuoteSuccess: `${KEY}/update-quote-success`
}

// Reducer
export const initialState = {
  sessionAlive: false,
  userData: null,
  requestPending: false,
  userMessage: null,
  passwordMessage: null,
  subdomain: 'www',
  postLoginSSO: {
    provider: null,
    redirectTo: null
  }
}

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.updateQuotePending:
    case actions.updateQuoteFailure:
    case actions.updateQuoteSuccess:
      return {
        ...state,
        userData: {...state.userData, quote: action.data}
      }

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

    case actions.registerSubdomain:
      return {
        ...state,
        subdomain: action.subdomain
      }

    case actions.deleteFailure:
    case actions.deleteSuccess:
      return initialState

    case actions.updateSuccess:
      return {
        ...state,
        requestPending: false,
        userData: action.data.data,
        sessionAlive: true
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

export function requestResetPassword (data: any) {
  const redirect_url = `${CLIENT_URL}/reset-password`
  return {
    types: [
      actions.reqPassResetPending,
      actions.reqPassResetSuccess,
      actions.reqPassResetFailure
    ],
    callAPI: () => httpPost('/api/auth/password', { ...data, redirect_url })
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

export function clearUserMessage () {
  return {
    type: actions.clearUserMessage
  }
}

export function clearPasswordMessage () {
  return {
    type: actions.clearPasswordMessage
  }
}

export function setUserMessage (message: string) {
  return {
    type: actions.setUserMessage,
    message
  }
}

export function setPasswordMessage (message: string) {
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

export function registerSubdomain () {
  const current = subdomain().match(/accenture/) ? 'accenture' : 'www'

  return {
    type: actions.registerSubdomain,
    subdomain: current
  }
}

export function apiUpdateQuote(data: any) {
  let url = '/api/quotes'
  return {
    types: [
      actions.updateQuotePending,
      actions.updateQuoteSuccess,
      actions.updateQuoteFailure
    ],
    callAPI: () => httpPost(url, {quote: data})
  }
}
