import React from 'react'
import { ProfileContainer } from './container'
import { shallow, mount } from 'enzyme'
import WithProvider from 'lib/testHelpers'

describe('(Container) Profile', () => {
  it('should render a <LoginForm />', () => {
    const props = {
      dispatch: () => {},
      userData: 'test',
      renderLoginForm: true
    }

    const wrapper = mount(<WithProvider><ProfileContainer {...props} /></WithProvider>)
    const element = wrapper.find('LoginForm')

    expect(element.length).toBe(1)
  })

  it('should render a <Profile />', () => {
    const props = {
      dispatch: () => {},
      userData: 'test',
      renderLoginForm: false
    }

    const wrapper = shallow(<ProfileContainer {...props} />)
    const element = wrapper.find('Profile')

    expect(element.length).toBe(1)
  })
})
