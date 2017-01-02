/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import PasswordReset from './component'
import { loginSelector as selector } from 'modules/UserSession/selectors'

import { browserHistory } from 'react-router'
import { genFormHandler } from 'lib/formHelpers'
import { updatePassword } from 'modules/UserSession'

export function onSuccess (result: any, dispatch: Function, browser: any) {
  // a little dependency injection for testability
  const bb = browser || browserHistory
  bb.push('profile')
}

const onSubmit = genFormHandler({
  action: updatePassword,
  onSuccess
})

type Props = {
  userData: any,
  onSubmit: Function
}

export class PasswordResetContainer extends React.Component {
  props: Props

  render () {
    return (
      <PasswordReset
        {...this.props.userData}
        onSubmit={this.props.onSubmit || onSubmit}
      />
    )
  }
}

export default connect(selector)(PasswordResetContainer)
