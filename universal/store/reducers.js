import { actions as analyticsActions } from 'modules/Middleware/analytics'
import { combineReducers } from 'redux'
import { toast } from 'modules/Toast'
import { reducer as formReducer } from 'redux-form'
import * as messages from 'modules/Messages'
import * as session from 'modules/UserSession'
import * as signup from 'modules/SignUp'
import * as quoter from 'modules/Quoter'
import * as contactus from 'modules/ContactUs'

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
    [messages.KEY]: messages.reducer,
    [session.KEY]: session.reducer,
    [signup.KEY]: signup.reducer,
    [quoter.KEY]: quoter.reducer,
    [contactus.KEY]: contactus.reducer,
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
