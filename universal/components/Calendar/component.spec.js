import React from 'react'

import {shallow} from 'enzyme'

import lolex from 'lolex'

import Calendar from 'components/Calendar'

import { http } from '../../lib'
const HOST_URL = http.HOST_URL

describe('<Calendar />', () => {
  const wrapper = shallow(<Calendar />)

  it('Should have default state', () => {
    const hours = wrapper.state().hours
    const minutes = wrapper.state().minutes
    const frequency = wrapper.state().frequency

    expect(hours).toEqual(22)
    expect(minutes).toEqual(0)
    expect(frequency).toEqual('DAILY')
  })

  it('Should render a download link', () => {
    let clock = lolex.install(1475791313486)
    const cal = shallow(<Calendar />)

    let date = new Date(Date.now())
    date.setHours(cal.state().hours, cal.state().minutes, 0, 0)
    date = date.toISOString().replace(/-|:/g, '').split('.')[0] + 'Z'

    const link =
      <a href={`${HOST_URL}/api/calendar?eventtime=${date}&frequency=DAILY`} download>
        Get Sleep Reminder
      </a>

    expect(cal.contains(link)).toEqual(true)
    clock.uninstall()
  })

  describe('onChangeHours()', () => {
    it('Should update the hours state', () => {
      wrapper.find('#hours').simulate('change', {target: {value: 10}})
      expect(wrapper.state().hours).toEqual(10)
    })
  })

  describe('onChangeMinutes()', () => {
    it('Should update the minutes state', () => {
      wrapper.find('#minutes').simulate('change', {target: {value: 50}})
      expect(wrapper.state().minutes).toEqual(50)
    })
  })

  describe('onChangeFrequency()', () => {
    it('Should update the frequency state', () => {
      wrapper.find('#frequency').simulate('change', {target: {value: 'WEEKLY'}})
      expect(wrapper.state().frequency).toEqual('WEEKLY')
    })
  })
})
