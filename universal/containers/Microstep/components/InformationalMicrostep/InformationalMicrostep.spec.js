import React from 'react'
import { shallow } from 'enzyme'
import InformationalMicrostep from './component'

describe('(Component) InformationalMicrostep', () => {
  const defaultMicrostep = {
    title: 'A basic Microstep',
    description: 'Lorem ipsum...'
  }

  it('should display a CTA', () => {
    const props = {
      microstep: {
        ...defaultMicrostep,
        cta_url: 'http://test.com/',
        cta_text: 'Test!'
      }
    }

    const wrapper = shallow(<InformationalMicrostep {...props} />)
    const element = wrapper.find('Link')

    expect(element.length).toBe(1)
    expect(element.first().prop('to')).toBe(props.microstep.cta_url)
    expect(element.first().prop('children')).toBe(props.microstep.cta_text)
  })

  describe ('should not display a CTA', () => {
    it('when neither cta_url or cta_text are defined', () => {
      const props = { microstep: defaultMicrostep }

      const wrapper = shallow(<InformationalMicrostep {...props} />)
      const element = wrapper.find('Link')

      expect(element.length).toBe(0)
    })

    it('when cta_text is not defined', () => {
      const props = {
        microstep: {
          ...defaultMicrostep,
          cta_url: 'http://test.com/',
          cta_text: null
        }
      }

      const wrapper = shallow(<InformationalMicrostep {...props} />)
      const element = wrapper.find('Link')

      expect(element.length).toBe(0)
    })

    it('when cta_url is not defined', () => {
      const props = {
        microstep: {
          ...defaultMicrostep,
          cta_url: null,
          cta_text: 'Test!'
        }
      }

      const wrapper = shallow(<InformationalMicrostep {...props} />)
      const element = wrapper.find('Link')

      expect(element.length).toBe(0)
    })
  })
})
