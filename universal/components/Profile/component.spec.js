import React from 'react'
import Profile from './component'
import { shallow } from 'enzyme'

describe('(Component) Profile', () => {
  it('should display the users username', () => {
    const props = { name: 'billzebub', email: 'email@test.com' }
    const wrapper = shallow(<Profile {...props} />)
    const element = wrapper.find('header')

    expect(element.contains('billzebub')).toBe(true)
  })
})
