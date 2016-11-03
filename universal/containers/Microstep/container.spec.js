import React from 'react'
import { shallow } from 'enzyme'
import { Microstep } from './container'

describe('(Component) MicrostepList', () => {
  const defaultProps = {
    dispatch: () => {},
    microstep: undefined,
    fetchPending: false,
    stepType: undefined
  }

  it('Should render as a <MissingMicrostep /> when no request pending and no Microstep present', () => {
    const props = { ...defaultProps, fetchPending: false, microstep: undefined}

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('MissingMicrostep')

    expect(element.length).toBe(1)
  })

  it('Should render as a <LoadingMicrostep /> when request pending', () => {
    const props = { ...defaultProps, fetchPending: true, microstep: undefined}

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('LoadingMicrostep')

    expect(element.length).toBe(1)
  })

  it('Should render as a <BasicMicrostep /> when we have one to render.', () => {
    const props = {
      ...defaultProps,
      microstep: {
        title: 'hello',
        description: 'goodbye'
      },
    }

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('BasicMicrostep')

    expect(element.length).toBe(1)
  })

  it('Should render as a <InformationalMicrostep /> when we have one to render.', () => {
    const props = {
      ...defaultProps,
      microstep: {
        title: 'hello',
        description: 'goodbye'
      },
      stepType: 'informational'
    }

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('InformationalMicrostep')

    expect(element.length).toBe(1)
  })

  it('Should render as a <ProductMicrostep /> when we have one to render.', () => {
    const props = {
      ...defaultProps,
      microstep: {
        title: 'Product',
        body_html: 'Stuff',
        link: 'link/to/store',
        price: '$100.00',
        image: {
          src: '/path/to/image'
        }
      },
      stepType: 'product'
    }

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('ProductMicrostep')

    expect(element.length).toBe(1)
  })
})
