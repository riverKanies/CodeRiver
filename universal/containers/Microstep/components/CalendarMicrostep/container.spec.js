import React from 'react'

import { mount, shallow } from 'enzyme'

import lolex from 'lolex'

import CalendarMicrostep from './container'

import { HOST_URL } from 'lib/http'

describe('<CalendarMicrostep />', () => {
  const microstep = {
    id: 1,
    title: 'title',
    description: 'description'
  }

  it('Should have default state', () => {
    const wrapper = mount(<CalendarMicrostep microstep={microstep} />)
    const hours = wrapper.state().hours
    const minutes = wrapper.state().minutes
    const frequency = wrapper.state().frequency

    expect(hours).toEqual(22)
    expect(minutes).toEqual(0)
    expect(frequency).toEqual('DAILY')
  })

  it('Should render a download link', () => {
    const wrapper = mount(<CalendarMicrostep microstep={microstep} />)
    let clock = lolex.install(1475791313486)
    const cal = mount(<CalendarMicrostep microstep={microstep} />)

    let date = new Date(Date.now())
    date.setHours(cal.state().hours, cal.state().minutes, 0, 0)
    date = date.toISOString().replace(/-|:/g, '').split('.')[0] + 'Z'

    const expected_url = `${HOST_URL}/api/calendar?id=1&eventtime=${date}&frequency=DAILY`
    const link = cal.find('#calendar-1-download-link')

    expect(link.prop('href')).toEqual(expected_url)

    clock.uninstall()
  })

  describe('onChangeFrequency()', () => {
    const wrapper = mount(<CalendarMicrostep microstep={microstep} />)
    it('Should update the frequency state', () => {
      wrapper.find('#frequency').simulate('change', {target: {value: 'WEEKLY'}})
      expect(wrapper.state().frequency).toEqual('WEEKLY')
    })
  })
  describe('linkActions', () => {
    it('should increment hours on incLink', () => {
      const wrapper = mount(<CalendarMicrostep microstep={microstep} />)
      wrapper.find('#cal-1-inc-link').simulate('click')
      wrapper.find('#cal-1-inc-link').simulate('click')
      wrapper.find('#cal-1-inc-link').simulate('click')
      wrapper.find('#cal-1-inc-link').simulate('click')
      expect(wrapper.state().hours).toEqual(2)
    })

    it('should decrement hours on declink', () => {
      const wrapper = mount(<CalendarMicrostep microstep={microstep} />)
      wrapper.find('#cal-1-dec-link').simulate('click')
      wrapper.find('#cal-1-dec-link').simulate('click')
      expect(wrapper.state().hours).toEqual(20)
    })

    context('moving minutes', () => {
      it('should inc minutes on incLink', () => {
        const wrapper = mount(<CalendarMicrostep microstep={microstep} />)

        wrapper.find('#cal-1-active-min').simulate('click')

        wrapper.find('#cal-1-inc-link').simulate('click')
        wrapper.find('#cal-1-inc-link').simulate('click')
        wrapper.find('#cal-1-inc-link').simulate('click')
        wrapper.find('#cal-1-inc-link').simulate('click')
        expect(wrapper.state().minutes).toEqual(4)
      })

      it('should dec minutes on decLink', () => {
        const wrapper = mount(<CalendarMicrostep microstep={microstep} />)

        wrapper.find('#cal-1-active-min').simulate('click')

        wrapper.find('#cal-1-dec-link').simulate('click')
        wrapper.find('#cal-1-dec-link').simulate('click')
        wrapper.find('#cal-1-dec-link').simulate('click')
        wrapper.find('#cal-1-dec-link').simulate('click')

        expect(wrapper.state().minutes).toEqual(56)
      })
    })
  })
})
