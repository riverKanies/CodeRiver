import React from 'react'
import { shallow } from 'enzyme'

import { MicrostepsContainer } from './container'

describe('(Component) MicrostepList', () => {
  it('Should render as a <div />.', () => {
    const dispatch = () => {}
    const products = { list: [] }

    const wrapper = shallow(<MicrostepsContainer dispatch={dispatch} products={products} />)
    const element = wrapper.find('div')

    expect(element.length).toBe(1)
  })
})
