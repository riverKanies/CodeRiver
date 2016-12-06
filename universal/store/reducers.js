import { actions as analyticsActions } from 'modules/Middleware/analytics'
import { combineReducers } from 'redux'
import { toast } from 'modules/Toast'
import { reducer as formReducer } from 'redux-form'
import * as microsteps from 'modules/Microsteps'
import * as messages from 'modules/Messages'
import * as microstep from 'modules/Microstep'
import * as mediumPosts from 'modules/MediumPosts'
import * as microstepsFilter from 'modules/MicrostepsFilter'
import * as session from 'modules/UserSession'
import * as signup from 'modules/SignUp'
import * as pathways from 'modules/Pathways'
import * as journeys from 'modules/Journeys'

const locationState = {
  location: null
}

const locationReducer = (state = locationState, action) => {
  return action.type === analyticsActions.locationChange
    ? action.location
    : state
}

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    [toast.KEY]: toast.reducer,
    [microsteps.KEY]: microsteps.reducer,
    [messages.KEY]: messages.reducer,
    [microstep.KEY]: microstep.reducer,
    [mediumPosts.KEY]: mediumPosts.reducer,
    [microstepsFilter.KEY]: microstepsFilter.reducer,
    [session.KEY]: session.reducer,
    [pathways.KEY]: pathways.reducer,
    [journeys.KEY]: journeys.reducer,
    [signup.KEY]: signup.reducer,
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
