/* @flow */
import { httpPost } from 'lib/http'

export const KEY = 'contactus'

export const actions = {
  contactPending: `${KEY}/contact-pending`,
  contactSuccess: `${KEY}/contact-success`,
  contactFailure: `${KEY}/contact-failure`
}

// Reducer
export const initialState = {
  contacted: false
}

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.contactPending:
      return {
        contacted: false
      }
    case actions.contactSuccess:
      return {
        contacted: true
      }
    case actions.contactFailure:
    default:
      return state
  }
}

export function contactUs(data) {
  const url = '/api/contactus'
  return {
    types: [
      actions.contactPending,
      actions.contactSuccess,
      actions.contactFailure
    ],
    callAPI: () => httpPost(url, data)
  }
}
