/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import Profile from 'components/Profile'
import { saveHeaderObject } from 'lib/http'

type Props = {
  dispatch: Function,
  location: Object
}

export class Welcome extends React.Component {
  props: Props

  componentWillMount () {
    const { token, client_id, uid } = this.props.location.query
    const headers = {
      'access-token': token,
      client: client_id,
      uid: decodeURIComponent(uid)
    }

    if (uid) {
      saveHeaderObject(headers)
    }
  }

  render () {
    return <Profile />
  }
}

export default connect(() => ({}))(Welcome)
