import _ from 'lodash'
import React from 'react'
import { http } from '../../lib'
const HOST_URL = http.HOST_URL

export default class Calendar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hours: 22,
      minutes: 0,
      frequency: 'DAILY'
    }

    _.bindAll(this, ['onChangeHours', 'onChangeMinutes', 'onChangeFrequency'])
  }

  render () {
    return (
      <div>
        <h1>Start Getting the Sleep You Need!</h1>
        <p>Set a calendar reminder that tells you when to go to bed.</p>
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
          Get Sleep Reminder
        </a>
      </div>
    )
  }

  onChangeHours (e) {
    const hours = e.target.value
    this.setState({hours: hours})
  }

  onChangeMinutes (e) {
    const minutes = e.target.value
    this.setState({minutes: minutes})
  }

  onChangeFrequency (e) {
    const frequency = e.target.value
    this.setState({frequency: frequency})
  }

  updateTime () {
    let date = new Date(Date.now())
    date.setHours(this.state.hours, this.state.minutes, 0, 0)
    return date.toISOString().replace(/-|:/g, '').split('.')[0] + 'Z'
  }

  downloadLink () {
    return `${HOST_URL}/api/calendar?eventtime=${this.updateTime()}&frequency=${this.state.frequency}`
  }
}
