import { combineReducers } from 'redux'
import { toast } from 'modules/Toast'
import { reducer as formReducer } from 'redux-form'
import * as products from 'modules/Products'

const locationState = {
  location: null
}

const locationReducer = (state = locationState, action) => {
  return action.type === 'LOCATION_CHANGE'
    ? action.location
    : state
}

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    [toast.KEY]: toast.reducer,
    [products.KEY]: products.reducer,
    location: locationReducer,
    form: formReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
