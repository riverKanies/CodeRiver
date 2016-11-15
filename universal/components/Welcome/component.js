/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { checkSession } from 'modules/UserSession'
import LoginForm from 'components/LoginForm'

type Props = {
  dispatch: Function,
  location: Object
}

class Welcome extends React.Component {
  props: Props

  componentWillMount () {
    const { token, client_id, uid } = this.props.location.query
    const headers = {
      'access-token': token,
      client: client_id,
      uid: decodeURIComponent(uid)
    }

    if (uid) {
      localStorage.setItem('thrive_user_headers', JSON.stringify(headers))
    }
  }

  componentDidMount () {
    const { dispatch } = this.props

    dispatch(checkSession())
  }

  render () {
    return <LoginForm />
  }
}

export default connect(() => ({}))(Welcome)
