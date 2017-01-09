import React from 'react'
import QuoteSectionInline from './component'
import { shallow } from 'enzyme'

describe('(Component) QuoteSectionInline', () => {

  context('should render ok without any props, defaults to default', () => {
    it('should render the section', () => {
      const subject = shallow(<QuoteSectionInline />)
      const target = subject.find('.quoteSectionInline')

      expect(target.length).toEqual(1)
    })
    it('should render a quote element', () => {
      const subject = shallow(<QuoteSectionInline />)
      const target = subject.find('q')

      expect(target.length).toEqual(1)
    })
    it('should render a cite element', () => {
      const subject = shallow(<QuoteSectionInline />)
      const target = subject.find('cite')

      expect(target.length).toEqual(1)
    })
  })

})
