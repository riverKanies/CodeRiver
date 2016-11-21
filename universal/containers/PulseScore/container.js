import React, { Component } from 'react'
import PulseScore from './component'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {

  return  {
    score: 45 //TODO: Pass real score here from state obj
  }
}

type Props = {
  score: number
};

class Container extends Component {
  props: Props;

  componentWillMount () {
    // TODO: Probably need to retrieve score from some endpoint here, then dispatch an action to update store
  }

  render () {
    return <PulseScore {...this.props} />
  }
}

export default connect(
  mapStateToProps
)(Container)
