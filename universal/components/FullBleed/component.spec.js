import React from 'react'
import FullBleed from './component'
import { shallow } from 'enzyme'

describe('(Component) FullBleed', () => {
  context('with default props', () => {
    const subject = shallow(<FullBleed />)

    it('should render ok with the default props', () => {
      const target = subject.find('section')

      expect(target.length).toEqual(1)
    })

    it('renders a default image', () => {
      const target = subject.find('img')

      expect(target.length).toEqual(1)
    })

    it('renders a default title', () => {
      const target = subject.find('h2')

      expect(target.length).toEqual(1)
      expect(target.text()).toEqual('Title')
    })

    it('has a ContentLabel', () => {
      const target = subject.find('ContentLabel')

      expect(target.length).toEqual(1)
    })

    it('renders one paragraph of section text', () => {
      const target = subject.find('p')

      expect(target.length).toEqual(1)
    })

    it('renders an external link by default', () => {
      const target = subject.find('ExternalLink')

      expect(target.length).toEqual(0)
    })
  })

  context('variable section text', () => {
    const sectionText = 'hello'
    const subject = shallow(<FullBleed sectionText={sectionText} />)

    it('renders no button', () => {
      const target = subject.find('p')

      expect(target.length).toEqual(1)
      expect(target.text()).toEqual('hello')
    })
  })

  context('hasButton false', () => {
    const subject = shallow(<FullBleed hasButton={false} />)

    it('renders no button', () => {
      const target = subject.find('ExternalLink')

      expect(target.length).toEqual(0)
    })
  })

  context('rendering images with and without links', () => {
    const defaultProps = {
      link: {
        linkText: 'Read More',
        linkTo: 'http://www.thriveglobal.com',
        linkStyle: 'blue'
      }
    }
    it('has no link when hasButton is false', () => {
      const subject = shallow(
        <FullBleed {...defaultProps} hasButton={false} />
      )
      const target = subject.find('figure')
      const link = target.find('a')

      expect(link.length).toEqual(0)
    })

    it('has a link when hasButton is true', () => {
      const subject = shallow(
        <FullBleed {...defaultProps} hasButton={true} />
      )
      const target = subject.find('figure')
      const link = target.find('a')

      expect(link.length).toEqual(1)
    })
  })

  context('rendering the component header with and without a link', () => {
    const defaultProps = {
      link: {
        linkText: 'Read More',
        linkTo: 'http://www.thriveglobal.com',
        linkStyle: 'blue'
      }
    }
    it('has no link when hasButton is false', () => {
      const subject = shallow(
        <FullBleed {...defaultProps} hasButton={false} />
      )
      const target = subject.find('header')
      const link = target.find('a')

      expect(link.length).toEqual(0)
    })

    it('has a link when hasButton is true', () => {
      const subject = shallow(
        <FullBleed {...defaultProps} hasButton={true} />
      )
      const target = subject.find('header')
      const link = target.find('a')

      expect(link.length).toEqual(1)
    })
  })
})
