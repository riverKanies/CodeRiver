import React from 'react'
import Profile from './component'
import { shallow } from 'enzyme'

describe('(Component) Profile', () => {
  it('should display the users email', () => {
    const props = { email: 'test@test.com', logOutAction: () => {} }
    const wrapper = shallow(<Profile {...props} />)
    const element = wrapper.find('div')

    expect(element.contains('test@test.com')).toBe(true)
  })
})
