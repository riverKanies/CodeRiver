import React from 'react'
import { PasswordResetContainer, onSuccess } from './container'
import { shallow, mount } from 'enzyme'
import WithProvider from 'lib/testHelpers'

describe('(Container) PasswordResetContainer', () => {
  it('should render a <PasswordReset /> component', () => {
    const props = {
      dispatch: () => Promise.resolve(),
      userData: 'test',
      renderLoginForm: false
    }

    const wrapper = mount(<PasswordResetContainer {...props} />)
    const element = wrapper.find('PasswordReset')

    expect(element.length).toBe(1)
  })

  it('should pass the onSubmit to the passwordReset', () => {
    const onSubmit = jest.fn(() => {})
    const props = {
      dispatch: () => Promise.resolve(),
      userData: 'test',
      renderLoginForm: false,
      onSubmit
    }

    const wrapper = mount(<PasswordResetContainer {...props} />)
    const element = wrapper.find('PasswordReset')

    expect(element.props().onSubmit).toEqual(onSubmit)
  })

  it('calls browser push on success', () => {
    const result = {}
    const dispatch = () => {}
    const bowser = {
      push: jest.fn(() => 'good-for-nothing-do-nothing-ungrateful....')
    }
    onSuccess(result, dispatch, bowser)
    expect(bowser.push).toBeCalledWith('profile')
  })
})
