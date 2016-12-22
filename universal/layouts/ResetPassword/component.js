/* @flow */
import React from 'react'
import RequestPasswordResetForm from 'components/RequestPasswordResetForm'
import PasswordResetForm from 'components/PasswordResetForm'
import { checkSession } from 'modules/UserSession'
import { connect } from 'react-redux'
import { isLoggedIn as selector } from 'modules/UserSession/selectors'
import { saveHeaderObject } from 'lib/http'

type Props = {
  location: {
    query: {
      client_id: string,
      token: string,
      uid: string
    }
  },
  dispatch: Function,
  isLoggedIn: boolean
}

export class PasswordResetLayout extends React.Component {
  props: Props

  componentWillMount () {
    const { token, client_id, uid } = this.props.location.query
    const headers = {
      'access-token': token,
      client: client_id,
      uid: decodeURIComponent(uid)
    }
    saveHeaderObject(headers)

    this.props.dispatch(checkSession())
    .catch(() => {
      // session was not legit, fail silently
    })
  }

  render () {
    if (this.props.isLoggedIn) {
      return (
        <PasswordResetForm />
      )
    }
    return (
      <RequestPasswordResetForm />
    )
  }
}

export default connect(selector)(PasswordResetLayout)
