import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import makeRootReducer from 'store/reducers'

const store = createStore(makeRootReducer())

export function WithProvider ({ children }: any) {
  return (<Provider store={store}>{children}</Provider>)
}

export default WithProvider
