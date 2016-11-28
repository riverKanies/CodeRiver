import React from 'react'
import { ProfileContainer } from './container'
import { shallow, mount } from 'enzyme'
import WithProvider from 'lib/testHelpers'

describe('(Container) Profile', () => {
  // TODO: fix test cause facebook is breaking this
  xit('should render a <LoginForm />', () => {
    const props = {
      dispatch: () => Promise.resolve(),
      userData: 'test',
      renderLoginForm: true
    }

    const wrapper = shallow(<ProfileContainer {...props} />)
    const element = wrapper.find('LoginForm')

    expect(element.length).toBe(1)
  })

  it('should render a <Profile />', () => {
    const props = {
      dispatch: () => Promise.resolve(),
      userData: 'test',
      renderLoginForm: false
    }

    const wrapper = shallow(<ProfileContainer {...props} />)
    const element = wrapper.find('Profile')

    expect(element.length).toBe(1)
  })
})
