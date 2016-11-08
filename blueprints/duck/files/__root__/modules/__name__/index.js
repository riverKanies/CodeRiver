/* @flow */
import http from 'utils/http'
import baseActions from 'modules/baseActions'

// Name
export const KEY = '<%= dashesEntityName %>'

// Constants
export const constants = { }

// Action Creators
export const actions = { ...baseActions(KEY) }

// Reducer
export const initialState = { }

export function reducer (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
