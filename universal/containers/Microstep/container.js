import React from 'react'

import LoadingMicrostep from './components/LoadingMicrostep'
import MissingMicrostep from './components/MissingMicrostep'
import InformationalMicrostep from './components/InformationalMicrostep'
import BasicMicrostep from './components/BasicMicrostep'

import { connect } from 'react-redux'
import { loadMicrostep, KEY } from 'modules/Microstep'
import styles from './styles'

type Props = {
  dispatch: () => void,
  fetchPending: boolean,
  id: string,
  microstep: any,
  stepType: string
}

export class Microstep extends React.Component {
  props: Props;

  componentWillMount () {
    const { id, stepType } = this.props

    this.props.dispatch(loadMicrostep(id, stepType))
  }

  renderMicrostep (microstep) {
    const { fetchPending, stepType } = this.props

    if (!microstep) {
      return (fetchPending) ? <LoadingMicrostep /> : <MissingMicrostep />
    }

    switch (stepType) {
      case 'informational':
        return <InformationalMicrostep microstep={microstep} />

      default:
        return <BasicMicrostep microstep={microstep} />
    }
  }

  render () {
    return (
      <div className={styles.container}>
        {this.renderMicrostep(this.props.microstep)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  microstep: state[KEY].data,
  fetchPending: state[KEY].fetchPending
})

export default connect(mapStateToProps)(Microstep)
