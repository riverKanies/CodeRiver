import React, { Component } from 'react'
import PulseScore from './component'
import { connect } from 'react-redux'
import { getScoreData } from 'modules/UserSession/selectors'

type Props = {
  score: number,
  dispatch: Function
};

class Container extends Component {
  props: Props;

  render () {
    return <PulseScore {...this.props} />
  }
}

export default connect(getScoreData)(Container)
