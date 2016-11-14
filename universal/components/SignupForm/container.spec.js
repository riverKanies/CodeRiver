import React from 'react'
import { shallow } from 'enzyme'

import SignUpForm from './container'

describe('(Container) SignUpForm', () => {
  const wrapper = shallow(<SignUpForm />)

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

  it('should require a password confirmation', () => {
    const expectedResult = wrapper.props().validate()

    expect(Object.keys(expectedResult)).toContain('password_confirmation')
  })

  it('should accept a valid password confirmation', () => {
    const expectedResult = wrapper.props().validate({
      'password': '12345678',
      'password_confirmation': '12345678'
    })

    expect(Object.keys(expectedResult)).not.toContain('password_confirmation')
  })

  it('should reject non matching passwords', () => {
    const expectedResult = wrapper.props().validate({
      'password': '123456789',
      'password_confirmation': '12345678'
    })

    expect(Object.keys(expectedResult)).toContain('password_confirmation')
  })
})
