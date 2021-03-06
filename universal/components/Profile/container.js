/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Profile from './component'
import { deleteSession } from 'modules/UserSession'
import { loginSelector as selector } from 'modules/UserSession/selectors'
import LoginForm from 'components/LoginForm'

type Props = {
  dispatch: Function,
  userData: any,
  renderLoginForm: boolean
}

export class ProfileContainer extends React.Component {
  logOutUser: Function
  props: Props

  constructor () {
    super(...arguments)
    this.logOutUser = this.logOutUser.bind(this)
  }

  logOutUser () {
    this.props.dispatch(deleteSession())
  }

  render () {
    if (this.props.renderLoginForm) {
      return <LoginForm />
    }

    return <Profile
      {...this.props.userData}
      logOutAction={this.logOutUser}
     />
  }
}

export default connect(selector)(ProfileContainer)
