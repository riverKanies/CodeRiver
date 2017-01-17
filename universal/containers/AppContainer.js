/* @flow */
import React from 'react'

import * as analytics from 'modules/Middleware/analytics'
import { registerSubdomain } from 'modules/UserSession'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import createRoutes from 'routes'

type Props = {
  history: Object,
  store: Object,
}

class AppContainer extends React.Component {
  props: Props
  unsubscribe: any

  componentWillMount () {
    const { history, store } = this.props

    // Use history to update store with location
    this.unsubscribe = history.listen(location => {
      store.dispatch({
        type: analytics.actions.locationChange,
        location
      })
    })

    store.dispatch(registerSubdomain())
  }

  componentDidMount () {
    const { store, history } = this.props

    store.dispatch({
      type: analytics.actions.locationChange,
      location: history.getCurrentLocation()
    })
  }

  componentWillUnmount () {
    this.unsubscribe && this.unsubscribe()
  }

  render () {
    const { store, history } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router history={history} children={createRoutes(store)} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
