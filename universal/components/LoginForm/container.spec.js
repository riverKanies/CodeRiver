import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from './container'

describe('(Container) LoginForm', () => {
  const wrapper = shallow(<LoginForm />)

  it('should require a valid email', () => {
    const expectedResult = wrapper.props().validate()

    expect(Object.keys(expectedResult)).toContain('email')
  })

  it('should accept a valid email', () => {
    const expectedResult = wrapper.props().validate({'email': 'test@test.com'})

    expect(Object.keys(expectedResult)).not.toContain('email')
  })

  it('should require a valid password', () => {
    const expectedResult = wrapper.props().validate()

    expect(Object.keys(expectedResult)).toContain('password')
  })

  it('should accept a valid password', () => {
    const expectedResult = wrapper.props().validate({'password': '12345678'})

    expect(Object.keys(expectedResult)).not.toContain('password')
  })
})
