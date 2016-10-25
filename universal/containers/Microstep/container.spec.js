import React from 'react'
import { shallow } from 'enzyme'
import { Microstep } from './container'

describe('(Component) MicrostepList', () => {
  it('Should render as a <MissingMicrostep /> when no request pending and no Microstep present', () => {
    const props = {
      dispatch: () => {},
      microstep: undefined,
      fetchPending: false
    }

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('MissingMicrostep')

    expect(element.length).toBe(1)
  })

  it('Should render as a <LoadingMicrostep /> when request pending', () => {
    const props = {
      dispatch: () => {},
      microstep: undefined,
      fetchPending: true
    }

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('LoadingMicrostep')

    expect(element.length).toBe(1)
  })

  it('Should render as a <BasicMicrostep /> when we have one to render.', () => {
    const props = {
      dispatch: () => {},
      microstep: {
        title: 'hello',
        description: 'goodbye'
      },
      fetchPending: false
    }

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('BasicMicrostep')

    expect(element.length).toBe(1)
  })
})
