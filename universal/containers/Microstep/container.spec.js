import React from 'react'
import { shallow, mount } from 'enzyme'

import { Microstep as MicrostepContainer } from './container'

describe('(Container) MicrostepContainer', () => {
  it('Should render as a <LoadingMicrostep /> when request pending', () => {
    const props = {
      dispatch: () => Promise.resolve(),
      fetchPending: true,
      microstep: null
    }

    const wrapper = shallow(<MicrostepContainer {...props} />)
    const element = wrapper.find('LoadingMicrostep')

    expect(element.length).toBe(1)
  })

  it('Should render as a <MissingMicrostep /> when request is not pending', () => {
    const props = {
      dispatch: () => Promise.resolve(),
      fetchPending: false,
      microstep: null
    }

    const wrapper = shallow(<MicrostepContainer {...props} />)
    const element = wrapper.find('MissingMicrostep')

    expect(element.length).toBe(1)
  })

  it('Should render a <Microstep />', () => {
    const props = {
      dispatch: () => Promise.resolve(),
      microstep: true
    }

    const wrapper = shallow(<MicrostepContainer {...props} />)
    const element = wrapper.find('Microstep')

    expect(element.length).toBe(1)
  })
})
