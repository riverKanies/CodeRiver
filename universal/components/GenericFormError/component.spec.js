import React from 'react'
import GenericFormError from './component'
import { shallow } from 'enzyme'

describe('(Component) GenericFormError', () => {
  it('should render passed errors', () => {
    const errors = { error: 'there was a form error' }
    const wrapper = shallow(<GenericFormError {...errors} />)
    const element = wrapper.find('div')

    expect(element.contains('there was a form error')).toBe(true)
  })
})
