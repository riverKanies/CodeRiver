/* @flow */
import _ from 'lodash'
import React from 'react'
import { HOST_URL } from 'lib/http'

import Calendar from './component'

type Props = {
  microstep: {
    id: string,
    title: string,
    description: string,
  }
};

export default class CalendarContainer extends React.Component {
  state: any;
  props: Props;
  state = {
    hours: 22,
    minutes: 0,
    frequency: 'DAILY',
    hourActive: true
  }

  constructor (props: any) {
    super(props)

    _.bindAll(this, [
      'onChangeFrequency',
      'updateTime',
      'incHour',
      'decHour',
      'incMinute',
      'decMinute',
      'activateMinute',
      'activateHour'
    ])
  }

  activateHour (e: any) {
    this.setState({ hourActive: true })
  }

  activateMinute (e: any) {
    this.setState({ hourActive: false })
  }

  incHour () {
    const next = this.state.hours + 1

    this.setState({ hours: next % 24 })
  }

  decHour () {
    const next = (this.state.hours - 1 < 0) ? 23 : this.state.hours - 1

    this.setState({ hours: next })
  }

  incMinute () {
    const next = this.state.minutes + 1

    this.setState({ minutes: next % 60 })
  }

  decMinute () {
    const next = (this.state.minutes - 1 < 0) ? 59 : this.state.minutes - 1

    this.setState({ minutes: next })
  }

  onChangeFrequency (e: any) {
    const frequency = e.target.value
    this.setState({ frequency })
  }

  updateTime () {
    let date = new Date(Date.now())
    date.setHours(this.state.hours, this.state.minutes, 0, 0)
    return date.toISOString().replace(/-|:/g, '').split('.')[0] + 'Z'
  }

  downloadLink () {
    const { id } = this.props.microstep
    const time = this.updateTime()
    const frequency = this.state.frequency

    return `${HOST_URL}/api/calendar?id=${id}&eventtime=${time}&frequency=${frequency}`
  }

  render () {
    const props = {
      ...this.state,
      ...this.props,
      microstep: this.props.microstep,
      onChangeFrequency: this.onChangeFrequency,
      downloadLink: this.downloadLink(),
      activateHour: this.activateHour,
      activateMinute: this.activateMinute,
      incMinute: this.incMinute,
      decMinute: this.decMinute,
      incHour: this.incHour,
      decHour: this.decHour
    }

    return (
      <Calendar {...props} />
    )
  }
}
