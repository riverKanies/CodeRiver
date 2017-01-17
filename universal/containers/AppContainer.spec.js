import React from 'react'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'react-router'
import createStore from 'store/createStore'
import locationReducer from 'store/reducers'
import configureMockStore from 'redux-mock-store'

import { mount } from 'enzyme'
import { KEY, initialState } from 'modules/UserSession'
import AppContainer from 'containers/AppContainer'

import * as userSession from 'modules/UserSession'
import * as analytics from 'modules/UserSession'

const history = createMemoryHistory('/')

describe('<AppContainer />', () => {
  const store = createStore({})
  analytics.actions.locationChange = jest.fn(() => (
    { type: 'a-do-nothin-bitch' }
  ))

  userSession.registerSubdomain = jest.fn(() => (
    { type: 'another-do-nothin-bitch' }
  ))

  const wrapper = mount(<AppContainer store={store} history={history} />)

  it('Should render as a <Provider />.', () => {
    const providerElement = wrapper.find('Provider')

    expect(providerElement.length).toBe(1)
    expect(providerElement.props().store).toEqual(store)
  })

  it('Should render a child <Router />', () => {
    const routerElement = wrapper.find('Router')

    expect(routerElement.length).toBe(1)
    expect(routerElement.props().history).toEqual(history)
  })

  it('Should have dispatched a registerSubdomain action', () => {
    expect(userSession.registerSubdomain).toHaveBeenCalled()
  })
})
