import React from 'react'
import _ from 'lodash'
import { http } from 'lib'
import { connect } from 'react-redux'


class SignupForm extends React.Component {
  constructor (props) {
    super(props)
    console.log('props', props)

    this.state = {}

    _.bindAll(this, ['onSubmit'])
  }

  onSubmit () {
    const resp = http.post('/api/auth', {email: 'river8@ex.com', password: 'password', password_confirmation: 'password', confirm_success_url: 'http://localhost:4000/react/welcome'})
    console.log('resp', resp)
    // http://localhost:4000/react/welcome?account_confirmation_success=true&client_id=Ky6DahT9lPdA9w4u7YMwaA&config=default&expiry=1477516139&token=TXOYsJH-6ECAnP3ySBSEZA&uid=river4%40ex.com
  }

  render () {
    return <button onClick={this.onSubmit}>submit</button>
  }
}

export default connect(() => ({}))(SignupForm)
