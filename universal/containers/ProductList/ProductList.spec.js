import React from 'react'
import { shallow } from 'enzyme'

import { ProductList } from './ProductList'

describe('(Component) ProductList', () => {
  it('Should render as a <div />.', () => {
    const dispatch = () => {}
    const products = { list: [] }

    const wrapper = shallow(<ProductList dispatch={dispatch} products={products} />)
    const element = wrapper.find('div')

    expect(element.length).toBe(1)
  })
})
