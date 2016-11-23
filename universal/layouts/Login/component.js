/* @flow */
import React from 'react'
import LoginForm from 'components/LoginForm'
import { registerPostLoginSSO } from 'modules/UserSession'
import { connect } from 'react-redux'

type Props = {
  location: {
    query: Object
  },
  dispatch: Function
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

  render () {
    return (
      <LoginForm />
    )
  }
}

export default connect(() => ({}))(LoginLayout)
