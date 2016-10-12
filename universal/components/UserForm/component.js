import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'


class UserForm extends React.Component {
  constructor (props) {
    super(props)
    console.log('props', props)

    this.state = {}

    _.bindAll(this, ['onSubmit'])
  }

  onSubmit () {
    const resp = put('/api/auth', {password: 'password2', password_confirmation: 'password2'}, JSON.parse(localStorage.getItem('thrive_user_headers')))
    console.log('resp', resp)
    // http://localhost:4000/react/welcome?account_confirmation_success=true&client_id=Ky6DahT9lPdA9w4u7YMwaA&config=default&expiry=1477516139&token=TXOYsJH-6ECAnP3ySBSEZA&uid=river4%40ex.com
  }

  // tokenFormat: {
  //   "access-token": "{{ access-token }}",
  //   "token-type":   "Bearer",
  //   client:         "{{ client }}",
  //   expiry:         "{{ expiry }}",
  //   uid:            "{{ uid }}"
  // },

  render () {
    return <button onClick={this.onSubmit}>submit</button>
  }
}

function put (route, data, userheaders) {
  const method = 'PUT'
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...userheaders
  }

  return fetch('http://localhost:3000/api/auth', {
    headers,
    method,
    body: JSON.stringify(data)
  }).then(response => {
    console.log('raw resp', response, response.headers.get('access-token'))
    if (response.status == 200) {
      let headers = JSON.parse(localStorage.getItem('thrive_user_headers'))
      headers["access-token"] = response.headers.get('access-token')
      localStorage.setItem('thrive_user_headers', JSON.stringify(headers))
    }
    return response.json()
  })
}

export default connect(() => ({}))(UserForm)
