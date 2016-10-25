import React from 'react'
import { shallow } from 'enzyme'

import { MicrostepList } from './container'

describe('(Component) MicrostepList', () => {
  it('Should render as a <div />.', () => {
    const dispatch = () => {}
    const products = { list: [] }

    const wrapper = shallow(<MicrostepList dispatch={dispatch} products={products} />)
    const element = wrapper.find('div')

    expect(element.length).toBe(1)
  })
})
