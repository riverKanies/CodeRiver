import React from 'react'
import TeamSection from './component'
import { shallow } from 'enzyme'

describe('(Component) TeamSection', () => {
  context('using default props', () => {
    const subject = shallow(<TeamSection />)

    it('should exist', () => {
      const target = subject.find('h2')

      expect(target.length).toEqual(1)
    })
  })
})
