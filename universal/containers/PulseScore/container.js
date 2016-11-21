import React, { Component } from 'react'
import PulseScore from './component'
import { connect } from 'react-redux'
import { checkSession } from 'modules/UserSession'
import { getScoreData } from 'modules/UserSession/selectors'

type Props = {
  score: number,
  dispatch: Function
};

class Container extends Component {
  props: Props;

  componentWillMount () {
    this.props.dispatch(checkSession())
  }

  render () {
    return <PulseScore {...this.props} />
  }
}

export default connect(getScoreData)(Container)
