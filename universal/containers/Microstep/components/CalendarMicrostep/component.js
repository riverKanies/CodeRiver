/* @flow */
import _ from 'lodash'
import React from 'react'
import { HOST_URL } from 'utils/http'

type Props = {
  microstep: {
    id: string,
    title: string,
    description: string,
  }
};

export default class Calendar extends React.Component {
  state: any;
  props: Props;

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
    return (
      <div>
        <h1>{this.props.microstep.title}</h1>
        <p>{this.props.microstep.description}</p>
        <input
          defaultValue={this.state.hours}
          id='hours'
          max='23'
          min='00'
          onChange={this.onChangeHours}
          type='number'
        />
        <input
          defaultValue={this.state.minutes}
          id='minutes'
          max='59'
          min='00'
          onChange={this.onChangeMinutes}
          type='number'
        />
        <p>Select time.</p>
        <select
          defaultValue={this.state.frequency}
          id='frequency'
          onChange={this.onChangeFrequency}
        >
          <option value='DAILY'>Daily</option>
          <option value='WEEKLY'>Weekly</option>
          <option value='MONTHLY'>Monthly</option>
        </select>
        <p>Select frequency.</p>
        <a href={this.downloadLink()} download>
          Download Reminder
        </a>
      </div>
    )
  }
}
