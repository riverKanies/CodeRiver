/* @flow */
import React from 'react'
import { connect } from 'react-redux'
import { loadMicrosteps } from 'modules/Microsteps'
import getFilteredMicrosteps from './selector'

import styles from './styles'
import List from './List'
import Filter from './Filter'
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
        <h1>Microstep Search</h1>
        <div className={styles.inputContainer}>
          <Filter />
        </div>
        <div className={styles.inputContainer}>
          <List list={microsteps} />
          <Paginate />
        </div>
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
