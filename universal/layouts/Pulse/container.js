import React from 'react'
import { connect } from 'react-redux'

import Assessments from 'components/Assessments'
import { assessmentsSelector } from 'modules/UserSession/selectors'

type Props = {
  dispatch: Function,
  renderLoginForm: boolean,
  requestPending: boolean,
  creds: Object
}

export class PulseLayout extends React.Component {
  props: Props

  render () {
    return <Assessments {...this.props} key='sKzAso' />
  }
}

export default connect(assessmentsSelector)(PulseLayout)
