import React from 'react'
import ThreeColHeader from './component'
import { shallow, render } from 'enzyme'

describe('(Component) ThreeColHeader', () => {
  context('ThreeColHeader with default props', () => {

    it('should render the section class', () => {
      const subject = shallow(<ThreeColHeader />)
      const target = subject.find('.threeColHeader')

      expect(target.length).toEqual(1)
    })

    it('should render three content columns', () => {
      const subject = shallow(<ThreeColHeader />)
      const target = subject.find('.contentColumn')

      expect(target.length).toEqual(3)
    })

    it('should not render a column link by default', () => {
      const subject = render(<ThreeColHeader />)
      const target = subject.find('.contentColumn a')

      expect(target.length).toEqual(0)
    })

    it('should not render a footer by default', () => {
      const subject = shallow(<ThreeColHeader />)
      const target = subject.find('footer')

      expect(target.length).toEqual(0)
    })
  })

  context('renders footer when defined', () => {
    const footerProps = {
      footerLink: {
        linkText: 'hi'
      },
      footerText: [
        `Testing testing`
      ]
    }

    const footerTextOnly = {
      footerText: [
        `Testing testing`
      ]
    }

    const footerLinkOnly = {
      footerLink: {
        linkText: 'hi'
      },
    }

    it('renders text and a link when both are defined', () => {
      const subject = shallow(<ThreeColHeader {...footerProps} />)
      const target = subject.find('footer span')

      expect(target.children().length).toEqual(2)
    })

    it('renders only text when only text is defined.', () => {
      const subject = shallow(<ThreeColHeader {...footerTextOnly} />)
      const target = subject.find('footer span')

      expect(target.children().length).toEqual(1)
    })

    it('renders only a link when only a link is defined', () => {
      const subject = render(<ThreeColHeader {...footerLinkOnly} />)
      const target = subject.find('span a')

      expect(target.length).toEqual(1)
    })
  })

  context('column link logic', () => {
    const linkProps = {
      colOne: {
        title: 'Press',
        text: ['Testing'],
        link: {
          linkText: 'hi'
        }
      }
    }

    const subject = render(<ThreeColHeader {...linkProps} />)
    const targetColumn = subject.find('.contentColumn a')

    it('should render a link when a column link is defined', () => {
      expect(targetColumn.length).toEqual(1)
    })
  })
})
