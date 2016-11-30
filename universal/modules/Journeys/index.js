/* @flow */
import baseActions from 'modules/baseActions'
import { httpGet } from 'lib/http'

// Name
export const KEY = 'journeys'

// Action Creators
export const actions = {
  ...baseActions(KEY),
  chooseJourney: `${KEY}/choose-journey`,
  fetchDetailPending: `${KEY}/fetch-detail-pending`,
  fetchDetailSuccess: `${KEY}/fetch-detail-success`,
  fetchDetailFailure: `${KEY}/fetch-detail-failure`
}

// Reducer
export const initialState = {
  fetchPending: false,
  currentJourney: undefined,
  list: [],
  detail: undefined
}

export function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.chooseJourney:
      return { ...state, currentJourney: action.id }

    case actions.fetchDetailSuccess:
      return { ...state, requestPending: false, detail: action.data }

    case actions.fetchDetailPending:
      return { ...state, requestPending: true, detail: undefined }

    case actions.fetchSuccess:
      return { ...state, requestPending: false, list: action.data }

    case actions.fetchPending:
      return { ...state, requestPending: true, list: [] }
    default:
      return state
  }
}

export function loadJourneys (pathwayId: number | string) {
  return {
    types: [
      actions.fetchPending,
      actions.fetchSuccess,
      actions.fetchFailure
    ],
    callAPI: () => httpGet(`/api/pathways/${pathwayId}/journeys`)
  }
}

export function loadJourneyDetail (pathwayId: number | string, journeyId: number | string) {
  return {
    types: [
      actions.fetchDetailPending,
      actions.fetchDetailSuccess,
      actions.fetchDetailFailure
    ],
    callAPI: () => httpGet(`/api/pathways/${pathwayId}/journeys/${journeyId}`)
  }
}

export function chooseJourney (pathwayId: number | string) {
  return {
    type: actions.chooseJourney,
    id: pathwayId
  }
}
