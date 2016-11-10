/* @flow */
// Name
export const KEY = 'microsteps-filter'

// Constants
export const constants = { }

// Action Creators
export const actions = {
  updateFilter: `${KEY}/update-filter`,
  clearFilter: `${KEY}/clear-filter`,
  updatePage: `${KEY}/update-page`
}

// Reducer
export const initialState = {
  filter: '',
  currentPage: 0,
  perPage: 25
}

export function reducer (state = initialState, a) {
  switch (a.type) {
    case actions.updatePage:
      return { ...state, currentPage: a.currentPage }

    case actions.clearFilter:
      return initialState

    case actions.updateFilter:
      return { ...initialState, filter: a.filter }

    default:
      return state
  }
}

export function updateFilter (s) {
  return {
    type: actions.updateFilter,
    filter: s
  }
}

export function clearFilter () {
  return {
    type: actions.clearFilter
  }
}

export function updatePage (currentPage) {
  return {
    type: actions.updatePage,
    currentPage
  }
}
