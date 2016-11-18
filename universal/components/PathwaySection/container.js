import React from 'react'
import { connect } from 'react-redux'

import { loadPathways, KEY } from 'modules/Pathways'

import PathwaysSection from './component'

type Props = {
  dispatch: Function,
  list: Array<any>,
  fetchPending: false
}

export class Container extends React.Component {
  props: Props;

  componentWillMount () {
    this.props.dispatch(loadPathways())
      .catch(e => {
        // silent
        return undefined
      })
  }

  render () {
    return <PathwaysSection pathways={this.props.list} />
  }
}

function mapStateToProps (state) {
  return {
    list: state[KEY].list,
    requestPending: state[KEY].requestPending
  }
}

export default connect(mapStateToProps)(Container)
