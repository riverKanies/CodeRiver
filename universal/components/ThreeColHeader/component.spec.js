import React from 'react'
import ThreeColHeader from './component'
import { shallow } from 'enzyme'

describe('(Component) ThreeColHeader', () => {
  context('ThreeColHeader with default props', () => {

    it('should render find the section class', () => {
      const subject = shallow(<ThreeColHeader />)

      const target = subject.find('.threeColHeader')

      expect(target.length).toEqual(1)
    })

    it('should render three content columns', () => {
      const subject = shallow(<ThreeColHeader />)

      const target = subject.find('.contentColumn')

      expect(target.length).toEqual(3)
    })

    it('should render a footer with text by default', () => {
      const subject = shallow(<ThreeColHeader />)

      const target = subject.find('footer')

      expect(target.length).toEqual(1)
    })
  })

  context('footer text boolean logic', () => {
    const subject = shallow(<ThreeColHeader hasFooter={false}/>)
    const target = subject.find('footer')

    it('does not render a footer when set to false', () => {
      expect(target.length).toEqual(0)
    })
  })

})
