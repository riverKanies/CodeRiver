import React from 'react'
import ProductMicrostep from './component'

import { mount } from 'enzyme'

describe('(Component) ProductMicrostep', () => {
  it('should display the correct name', () => {
    const props = {
      microstep: {
        cta_text: 'click here',
        title: 'test title',
        vendor: 'thrive global',
        body_html: 'test body',
        link: 'link to the past',
        price: '19.99',
        image: {
          src: 'test image url'
        }
      },
      showLabel: true,
      button: {
        buttonText: 'button text',
        buttonStyle: 'stylin'
      }
    }

    const wrapper = mount(<ProductMicrostep {...props} />)
    const element = wrapper.find('#microstep-name')

    expect(element.text().includes('thrive global')).toBe(true)
  })
})
