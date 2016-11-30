/* @flow */
import React from 'react'
import LoginForm from 'components/LoginForm'
import { isLoggedIn } from 'modules/UserSession/selectors'
import { registerPostLoginSSO } from 'modules/UserSession'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

type Props = {
  location: {
    query: Object
  },
  dispatch: Function,
  isLoggedIn: boolean
}

class LoginLayout extends React.Component {
  props: Props

  componentWillMount () {
    const { location, dispatch } = this.props

    if (location.query && location.query.return_to) {
      const return_to = decodeURIComponent(location.query.return_to)

      dispatch(registerPostLoginSSO(return_to))
    }
  }

  componentDidUpdate () {
    const { isLoggedIn } = this.props
    if (isLoggedIn) {
      browserHistory.push('/profile')
    }
  }

  render () {
    return (
      <LoginForm {...this.props} />
    )
  }
}

export default connect(isLoggedIn)(LoginLayout)
