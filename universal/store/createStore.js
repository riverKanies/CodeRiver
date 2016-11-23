import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './reducers'
import createLogger from 'redux-logger'
import callAPIMiddleware from 'modules/Middleware/callApi'
import analyticsMiddleware from 'modules/Middleware/analytics'
import ssoMiddleware from 'modules/Middleware/sso'

export default (preloadedState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, callAPIMiddleware, analyticsMiddleware, ssoMiddleware]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension
    const logger = createLogger()
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
    middleware.push(logger)
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    preloadedState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers)
    })
  }

  return store
}
