import React from 'react'

import {mount} from 'enzyme'

import lolex from 'lolex'

import CalendarMicrostep from './container'

import { HOST_URL } from 'lib/http'

describe('<CalendarMicrostep />', () => {
  const microstep = {
    id: 1,
    title: 'title',
    description: 'description'
  }
  const wrapper = mount(<CalendarMicrostep microstep={microstep} />)

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
    const cal = mount(<CalendarMicrostep microstep={microstep} />)

    let date = new Date(Date.now())
    date.setHours(cal.state().hours, cal.state().minutes, 0, 0)
    date = date.toISOString().replace(/-|:/g, '').split('.')[0] + 'Z'

    const expected_url = `${HOST_URL}/api/calendar?id=1&eventtime=${date}&frequency=DAILY`

    expect(cal.find('a').first().prop('href')).toEqual(expected_url)
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
