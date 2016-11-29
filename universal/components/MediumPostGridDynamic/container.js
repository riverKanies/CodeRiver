/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { loadMediumPosts, KEY } from 'modules/MediumPosts'
import MediumPostGrid from './component'
import type { MediumPost } from 'lib/types'

type Props = {
  dispatch: Function,
  mediumPosts: Array<MediumPost>,
  requestPending: boolean
}

export class Container extends React.Component {
  props: Props;

  componentWillMount () {
    const { dispatch } = this.props

    dispatch(loadMediumPosts())
  }

  render () {
    return <MediumPostGrid
      dispatch={this.props.dispatch}
      posts={this.props.mediumPosts}
      requestPending={this.props.requestPending}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    mediumPosts: state[KEY].list,
    requestPending: state[KEY].requestPending
  }
}

export default connect(
  mapStateToProps,
)(Container)
