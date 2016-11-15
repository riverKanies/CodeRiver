/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Profile from './component'
import { checkSession } from 'modules/UserSession'
import selector from './selector'
import LoginForm from 'components/LoginForm'

type Props = {
  dispatch: Function,
  userData: any,
  renderLoginForm: boolean
}

class ProfileContainer extends React.Component {
  props: Props

  componentWillMount () {
    this.props.dispatch(checkSession())
  }

  render () {
    if (this.props.renderLoginForm) {
      return <LoginForm />
    }

    return <Profile {...this.props.userData} />
  }
}

// const mapStateToProps = (state) => {
//   const { renderLoginForm, userData } = selector(state)
//
//   return {
//     renderLoginForm,
//     userData
//   }
// }

export default connect(selector)(ProfileContainer)
