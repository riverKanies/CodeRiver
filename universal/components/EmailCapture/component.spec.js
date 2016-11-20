import React from 'react'
import { shallow } from 'enzyme'

import EmailCapture from './container'

describe('(Container) EmailCapture', () => {
  const wrapper = shallow(<EmailCapture />)

  it('should require a valid email', () => {
    const expectedResult = wrapper.props().validate()

    expect(Object.keys(expectedResult)).toContain('email')
  })

  it('should accept a valid email', () => {
    const expectedResult = wrapper.props().validate({'email': 'test@test.com'})

    expect(Object.keys(expectedResult)).not.toContain('email')
  })
})
