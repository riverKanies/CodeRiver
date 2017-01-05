import React from 'react'
import FeaturedProduct from './component'
import { shallow, mount } from 'enzyme'

describe('(Component) FeaturedProduct', () => {
  context('default case', () => {
    const subject = shallow(<FeaturedProduct />)

    it('should exist', () => {
      const target = subject.find('h3')
      expect(target.length).toEqual(1)
    })
  })

  context('using defined parameters', () => {
    const subject = mount(<FeaturedProduct />)

    it('should have 3 products', () => {
      const target = subject.find('figure')

      expect(target.length).toEqual(3)
    })
  })
})
