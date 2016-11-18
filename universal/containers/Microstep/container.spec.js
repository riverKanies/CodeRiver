import React from 'react'
import { shallow } from 'enzyme'
import { Microstep } from './container'

const genericDescription = `
Paragraphs are separated by a blank line.

* this one
* that one
* the other one
`

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

  it('Should render a <CalendarMicrostep /> when we have one to render.', () => {
    const microstep = {
      title: 'CalendarMicrostep Title',
      description: genericDescription
    }
    const props = {
      ...defaultProps,
      microstep,
      stepType: 'calendar'
    }

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('CalendarContainer')

    expect(element.length).toBe(1)
  })

  it('Should render a <ContentMicrostep /> when we have one to render.', () => {
    const microstep = {
      description: genericDescription
    }
    const props = {
      ...defaultProps,
      microstep,
      stepType: 'content'
    }

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('ContentMicrostep')

    expect(element.length).toBe(1)

  })
  it('Should render a <LinkMicrostep /> when we have one to render.', () => {
    const microstep = {
      description: genericDescription,
      cta_link: 'https://placekitten.com/',
      cta_text: 'cats!'
    }
    const props = {
      ...defaultProps,
      microstep,
      stepType: 'link'
    }

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('LinkMicrostep')

    expect(element.length).toBe(1)

  })

  it('Should render a <QuoteMicrostep /> when we have one to render.', () => {
    const microstep = {
      description: genericDescription
    }
    const props = {
      ...defaultProps,
      microstep,
      stepType: 'quote'
    }

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('QuoteMicrostep')

    expect(element.length).toBe(1)

  })
})
