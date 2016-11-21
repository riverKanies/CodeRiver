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
      'onChangeMinutes',
      'onChangeHours',
      'updateTime',
      'incrementHour',
      'decrementHour',
      'incrementMinute',
      'decrementMinute',
      'activateMinute',
      'activateHour'
    ])
  }

  activateHour (e: any) {
    this.setState({ hourActive: true })
  }
  activateMinute (e: any) {
    console.log('hey')
    this.setState({ hourActive: false })
  }

  onChangeMinutes (e: any) {
    const minutes = e.target.value
    this.setState({ minutes })
  }

  onChangeHours (e: any) {
    const hours = e.target.value
    this.setState({ hours })
  }

  incrementHour (e: any) {
    const next = this.state.hours + 1

    this.setState({ hours: next % 24 })
  }

  decrementHour (e: any) {
    const next = (this.state.hours - 1 < 0) ? 23 : this.state.hours - 1

    this.setState({ hours: next })
  }

  incrementMinute (e: any) {
    const next = this.state.minutes + 1

    this.setState({ minutes: next % 60 })
  }

  decrementMinute (e: any) {
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
      onChangeHours: this.onChangeHours,
      onChangeMinutes: this.onChangeMinutes,
      microstep: this.props.microstep,
      onChangeFrequency: this.onChangeFrequency,
      downloadLink: this.downloadLink(),
      activateHour: this.activateHour,
      activateMinute: this.activateMinute,
      incrementMinute: this.incrementMinute,
      decrementMinute: this.decrementMinute,
      incrementHour: this.incrementHour,
      decrementHour: this.decrementHour
    }

    return (
      <Calendar {...props} />
    )
  }
}
