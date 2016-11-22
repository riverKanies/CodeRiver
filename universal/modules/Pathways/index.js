/* @flow */
import { httpGet } from 'lib/http'
import baseActions from 'modules/baseActions'

// Name
export const KEY = 'pathways'

// Action Creators
export const actions = {
  ...baseActions(KEY),
  choosePathway: `${KEY}/choose-pathway`
}

// Reducer
export const initialState = {
  fetchPending: false,
  currentPathway: undefined,
  list: []
}

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.choosePathway:
      return { ...state, currentPathway: action.id }

    case actions.fetchSuccess:
      return { ...state, list: action.data, requestPending: false }

    default:
      return state
  }
}

export function loadPathways () {
  return {
    types: [
      actions.fetchPending,
      actions.fetchSuccess,
      actions.fetchFailure
    ],
    callAPI: () => httpGet('/api/pathways')
  }
}

export function choosePathway (pathwayId: number | string) {
  return {
    type: actions.choosePathway,
    id: pathwayId
  }
}
