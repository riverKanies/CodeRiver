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
  state: any
  props: Props

  constructor (props: any) {
    super(props)

    this.state = {
      hours: 22,
      minutes: 0,
      frequency: 'DAILY'
    }
    _.bindAll(this, ['onChangeFrequency', 'onChangeMinutes', 'onChangeHours', 'updateTime'])
  }

  onChangeMinutes (e: any) {
    const minutes = e.target.value
    this.setState({ minutes })
  }

  onChangeFrequency (e: any) {
    const frequency = e.target.value
    this.setState({ frequency })
  }

  onChangeHours (e: any) {
    const hours = e.target.value
    this.setState({ hours })
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
      downloadLink: this.downloadLink()
    }

    return (
      <Calendar {...props} />
    )
  }
}
