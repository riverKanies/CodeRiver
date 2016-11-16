import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { reducer } from 'redux-form'

const store = createStore(
  combineReducers({
    form: reducer
  })
)

export default function WithProvider ({ children }: any) {
  return (<Provider store={store}>{children}</Provider>)
}
