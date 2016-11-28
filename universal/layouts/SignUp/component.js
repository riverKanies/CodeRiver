/* @flow */
import React from 'react'
import SignUpForm from 'components/SignupForm'
import { isLoggedIn } from 'modules/UserSession/selectors'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

type Props = {
  location: {
    query: Object
  },
  dispatch: Function,
  isLoggedIn: boolean
}

class SignUp extends React.Component {
  props: Props

  componentDidUpdate () {
    const { isLoggedIn } = this.props
    if (isLoggedIn) {
      browserHistory.push('/profile')
    }
  }

  render () {
    return (
      <SignUpForm />
    )
  }
}

export default connect(isLoggedIn)(SignUp)
