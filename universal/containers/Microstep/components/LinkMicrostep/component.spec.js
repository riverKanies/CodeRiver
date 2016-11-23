import React from 'react'
import LinkMicrostep from './component'

import { mount } from 'enzyme'

const props = {
  microstep: {
    description: 'test description',
    cta_link: 'test link',
    cta_text: 'test text'
  }
}

describe('(Component) LinkMicrostep', () => {
  it('should render a <Button /> with the correct properties', () => {
    const wrapper = mount(<LinkMicrostep {...props} />)
    const element = wrapper.find('Button')

    expect(element.length).toBe(1)
    expect(element.props().buttonText).toBe(props.microstep.cta_text)
    expect(element.props().linkTo).toBe(props.microstep.cta_link)
    expect(element.props().buttonStyle).toBe('violet')
  })
})
