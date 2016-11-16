import React from 'react'
import { Welcome } from './component'
import { shallow } from 'enzyme'

describe('(Component) Welcome', () => {
  it('should render a <Profile /> element', () => {
    const props = {
      location: {
        query: 'test'
      }
    }

    const wrapper = shallow(<Welcome {...props} />)
    const element = wrapper.find('Connect(ProfileContainer)')

    expect(element.length).toBe(1)
  })
})
