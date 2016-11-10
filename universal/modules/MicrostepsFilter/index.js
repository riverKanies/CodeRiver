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

type StateProps = {
  filter: string,
  currentPage: number,
  perPage: number
}

// Reducer
export const initialState = {
  filter: '',
  currentPage: 0,
  perPage: 25
}

export function reducer (state: StateProps = initialState, a: any) {
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

export function updateFilter (s: string) {
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

export function updatePage (currentPage: string | number) {
  return {
    type: actions.updatePage,
    currentPage
  }
}
