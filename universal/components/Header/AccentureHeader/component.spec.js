import React from 'react'
import { shallow } from 'enzyme'

import AccentureHeader from './component'

describe('(Component) AccentureHeader', () => {
  const wrapper = shallow(<AccentureHeader />)
  const target = wrapper.find('Header')

  it('should render the header', () => {
    expect(target.length).toEqual(1)
    expect(target.children().first().equals(<h1>Accenture</h1>)).toBe(true)
  })
})
