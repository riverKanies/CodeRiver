import { combineReducers } from 'redux'
import { toast } from 'modules/Toast'
import { reducer as formReducer } from 'redux-form'
import * as microsteps from 'modules/Microsteps'
import * as microstep from 'modules/Microstep'
import * as mediumPosts from 'modules/MediumPosts'
import * as microstepsFilter from 'modules/MicrostepsFilter'

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
    [microsteps.KEY]: microsteps.reducer,
    [microstep.KEY]: microstep.reducer,
    [mediumPosts.KEY]: mediumPosts.reducer,
    [microstepsFilter.KEY]: microstepsFilter.reducer,
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
