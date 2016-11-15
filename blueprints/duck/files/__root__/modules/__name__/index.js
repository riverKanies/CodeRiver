/* @flow */
import http from 'lib/http'
import baseActions from 'modules/baseActions'

// Name
export const KEY = '<%= dashesEntityName %>'

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
