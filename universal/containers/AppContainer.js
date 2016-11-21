/* @flow */
import { actions as analyticsActions } from 'modules/Middleware/analytics'
import React from 'react'
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

  componentDidMount () {
    const { history, store } = this.props

    // Use history to update store with location
    this.unsubscribe = history.listen(location => {
      store.dispatch({
        type: analyticsActions.locationChange,
        location
      })
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
