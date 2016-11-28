import React from 'react'
import { httpPost, saveHeaderObject } from 'lib/http'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { checkSession } from 'modules/UserSession'
import FacebookLogin from './component'

type Props = {
  dispatch: Function
}

function saveHeaders (h) {
  saveHeaderObject(h)
  return Promise.resolve()
}

class FacebookAuthContainer extends React.Component {
  props: Props

  constructor () {
    super(...arguments)
    this.handleResponse = this.handleResponse.bind(this)
  }

  handleResponse (response) {
    httpPost('/api/auth/facebook/callback', response)
      .then(result => {
        return Promise.all([
          saveHeaders(result),
          this.props.dispatch(checkSession()),
          browserHistory.push('/profile')
        ])
      })
      .catch(e => {
        // silent failure
      })
  }

  render () {
    return (
      <FacebookLogin
        handleResponse={this.handleResponse}
      />
    )
  }
}
export default connect(() => ({}))(FacebookAuthContainer)
