/* @flow */
// Name
export const KEY = 'microsteps-filter'

// Constants
export const constants = { }

// Action Creators
export const actions = {
  updateFilter: `${KEY}/update-filter`,
  clearFilter: `${KEY}/clear-filter`
}

// Reducer
export const initialState = {
  filter: ''
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case actions.clearFilter:
      return { ...state, filter: '' }

    case actions.updateFilter:
      return { ...state, filter: actions.filter }

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
