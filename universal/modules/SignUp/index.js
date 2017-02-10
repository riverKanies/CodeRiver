/* @flow */
import { httpPost, CLIENT_URL } from 'lib/http'
import baseActions from 'modules/baseActions'
import { SELECTED_QUOTE_KEY } from 'modules/Quoter/constants'

// Name
export const KEY = 'sign-up'

// Action Creators
export const actions = { ...baseActions(KEY) }

export const constants = {
  successMessage: `
    Your account has been created, please check your email to activate your
    account.
  `
}

// Reducer
export const initialState = {
  createPending: false,
  message: null
}

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.createSuccess:
      return {
        ...state,
        createPending: false,
        message: constants.successMessage
      }

    case actions.createPending:
      return { ...state, createPending: true }

    case actions.createFailure:
      return { ...state, createPending: false }
    default:
      return state
  }
}

export function createAccount (data: any = {}) {
  let formData = { ...data }
  const quote = JSON.parse(localStorage.getItem(SELECTED_QUOTE_KEY))
  if (quote) formData.quote = quote

  return {
    types: [
      actions.createPending,
      actions.createSuccess,
      actions.createFailure
    ],
    callAPI: () => httpPost('/api/auth', { ...formData, confirm_success_url: `${CLIENT_URL}/welcome` })
  }
}
