/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { loadMicrosteps } from 'modules/Microsteps'
import getFilteredMicrosteps from './selector'

import styles from './styles'
import MicrostepList from './component'
import MicrostepSearch from './form'

type Props = {
  dispatch: Function,
  products: Object
}

export class MicrostepsContainer extends React.Component {
  props: Props;

  componentDidMount () {
    const { dispatch } = this.props

    dispatch(loadMicrosteps())
  }

  render () {
    const { microsteps } = this.props

    return (
      <div className={styles.container}>
        <MicrostepSearch />
        <MicrostepList list={microsteps} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    microsteps: getFilteredMicrosteps(state)
  }
}

export default connect(
  mapStateToProps,
)(MicrostepsContainer)
