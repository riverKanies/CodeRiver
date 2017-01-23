import React from 'react'
import AboutView from './component'
import { shallow } from 'enzyme'

describe('(Component) AboutView', () => {
  context('when rendering the page', () => {

    it('should contain child components', () => {
      const subject = shallow(<AboutView />)

      expect(subject.children().length).toEqual(6)
    })
  })
})
