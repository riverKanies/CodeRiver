/* @flow */
import { httpPost, CLIENT_URL } from 'lib/http'
import baseActions from 'modules/baseActions'

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
  let formData = Object.create(data)
  formData['gimme_newsletters'] = data.gimme_newsletters || 'false'
  formData['gimme_communications'] = data.gimme_newsletters || 'false'

  return {
    types: [
      actions.createPending,
      actions.createSuccess,
      actions.createFailure
    ],
    callAPI: () => httpPost('/api/auth', { ...formData, confirm_success_url: `${CLIENT_URL}/welcome` })
  }
}
