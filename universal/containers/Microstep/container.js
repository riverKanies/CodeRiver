/* @flow */
import React from 'react'

import LoadingMicrostep from './components/LoadingMicrostep'
import MissingMicrostep from './components/MissingMicrostep'
import CalendarMicrostep from './components/CalendarMicrostep'
import ContentMicrostep from './components/ContentMicrostep'
import LinkMicrostep from './components/LinkMicrostep'
import ProductMicrostep from './components/ProductMicrostep'
import QuoteMicrostep from './components/QuoteMicrostep'

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

  renderMicrostep (microstep: any) {
    const { fetchPending, stepType } = this.props

    if (!microstep) {
      return (fetchPending) ? <LoadingMicrostep /> : <MissingMicrostep />
    }

    switch (stepType) {
      case 'quote':
        return <QuoteMicrostep microstep={microstep} />

      case 'link':
        return <LinkMicrostep microstep={microstep} />

      case 'content':
        return <ContentMicrostep microstep={microstep} />

      case 'calendar':
        return <CalendarMicrostep microstep={microstep} />

      case 'product':
        return <ProductMicrostep microstep={microstep} />

      default:
        return <MissingMicrostep microstep={microstep} />
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
