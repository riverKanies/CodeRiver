import React from 'react'
import { shallow } from 'enzyme'
import Microstep from './component'

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
    type: undefined
  }

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
      type: 'product'
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
      type: 'calendar'
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
      type: 'content'
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
      type: 'link'
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
      type: 'quote'
    }

    const wrapper = shallow(<Microstep {...props} />)
    const element = wrapper.find('QuoteMicrostep')

    expect(element.length).toBe(1)

  })
})
