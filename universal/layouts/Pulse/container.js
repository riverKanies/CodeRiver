import React from 'react'
import { connect } from 'react-redux'

import Pulse from 'components/Pulse'
import { pulseSelector } from 'modules/UserSession/selectors'

type Props = {
  dispatch: Function,
  renderLoginForm: boolean,
  requestPending: boolean,
  creds: Object
}

export class PulseLayout extends React.Component {
  props: Props

  render () {
    return <Pulse {...this.props} />
  }
}

export default connect(pulseSelector)(PulseLayout)
