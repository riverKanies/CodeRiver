/* @flow */
import { httpPost, CLIENT_URL } from 'lib/http'
import baseActions from 'modules/baseActions'

// Name
export const KEY = 'sign-up'

// Action Creators
export const actions = { ...baseActions(KEY) }

// Reducer
export const initialState = { }

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    default:
      return state
  }
}

export function createAccount (data: any) {
  return {
    types: [
      actions.createPending,
      actions.createSuccess,
      actions.createFailure
    ],
    callAPI: () => httpPost('/api/auth', { ...data, confirm_success_url: `${CLIENT_URL}/welcome` })
  }
}
