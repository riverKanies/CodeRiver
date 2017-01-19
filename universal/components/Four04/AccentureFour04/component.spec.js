import React from 'react'
import AccentureFour04 from './component'
import { shallow } from 'enzyme'


describe('(Component) Four04', () => {
  const wrapper = shallow(<AccentureFour04 foo="bar" />)
  const target = wrapper.find('Four04')

  it('should render the 404 component', () => {
    expect(target.length).toEqual(1)
  })

  it('should pass the props', () => {
    expect(target.props().foo).toEqual('bar')
  })
})
