/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { loadMicrosteps } from 'modules/Microsteps'
import getFilteredMicrosteps from './selector'

import styles from './styles'
import MicrostepList from './component'
import MicrostepSearch from './form'
import Paginate from './Paginate'

type Props = {
  dispatch: Function,
  microsteps: Array<any>
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
        <Paginate />
        <MicrostepList list={microsteps} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { microsteps } = getFilteredMicrosteps(state)

  return {
    microsteps
  }
}

export default connect(
  mapStateToProps,
)(MicrostepsContainer)
