import React from 'react'
import PasswordReset from './component'
import PasswordForm from 'components/PasswordForm'
import { shallow, mount } from 'enzyme'
import WithProvider  from 'lib/testHelpers'

describe('(Component) PasswordReset', () => {
  const props = {
    email: 'email@test.com',
    onSubmit: () => { return 'nothin' }
  }

  it('should display the users email by default', () => {
    const wrapper = shallow(<PasswordReset {...props} />)
    const element = wrapper.find('header')

    expect(element.contains('email@test.com')).toBe(true)
  })

  it('displays the username if its passed in', () => {
    const wrapper = shallow(<PasswordReset {...props} name={'BILL'}  />)
    const element = wrapper.find('header')

    expect(element.contains('BILL')).toBe(true)
  })

  it('should render a password form with the passed in onSubmit handler', () => {
    const wrapper = mount(
      <WithProvider>
        <PasswordReset {...props} />
      </WithProvider>
    )
    const target = wrapper.find(PasswordForm)

    expect(target.props().onSubmit).toEqual(props.onSubmit)
  })
})
