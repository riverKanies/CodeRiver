import React from 'react'
import ThriveExperts from './component'
import { shallow } from 'enzyme'

describe('(Component) ThriveExperts', () => {
  context('ThriveExperts with default props', () => {

    it('should render the section class', () => {
      const subject = shallow(<ThriveExperts />)

      const target = subject.find('.thriveExperts')

      expect(target.length).toEqual(1)
    })

    it('should render a header', () => {
      const subject = shallow(<ThriveExperts />)

      const target = subject.find('h2')

      expect(target.length).toEqual(1)
    })

  })
})
