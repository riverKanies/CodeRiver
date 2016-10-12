import React from 'react'
import { connect } from 'react-redux'


class Welcome extends React.Component {
  componentDidMount () {
    const { token, client_id, uid } = this.props.location.query
    const headers = {
      'access-token': token,
      client: client_id,
      uid: decodeURIComponent(uid)
    }
    console.log('storing headers', headers)
    localStorage.setItem('thrive_user_headers', JSON.stringify(headers))
  }

  render () {
    return <p>Welcome, your account has been created!</p>
  }
}

export default connect(() => ({}))(Welcome)
