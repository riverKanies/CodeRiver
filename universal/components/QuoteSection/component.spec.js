import React from 'react'
import QuoteSection from './component'

import { shallow } from 'enzyme'

describe('(Component) QuoteSection', () => {
  it('should render ok without any props, defaults to default', () => {
    const subject = shallow(<QuoteSection />)

    const target = subject.find('.quoteSection')

    expect(target.length).toEqual(1)
  })

  context('contains a quote that is not a link', () => {
    const props = {
      isLink: false,
      quote: ['hello', 'goodbye'],
      quoteURL: 'http://www.google.com'
    }
    const subject = shallow(<QuoteSection {...props} />)

    const target = subject.find('q')

    it('it renders the q element', () => {
      expect(target.length).toEqual(1)
    })

    it('the q element does not contain a link', () => {
      expect(target.find('a').length).toEqual(0)
    })

    it('renders multiple quotes', () => {
      expect(target.children().length).toEqual(2)
    })
  })
  context('contains a quote that is a link', () => {
    const props = {
      isLink: true,
      quote: ['hello'],
      quoteURL: 'http://www.google.com'
    }
    const subject = shallow(<QuoteSection {...props} />)

    const target = subject.find('q')

    it('it renders the q element', () => {
      expect(target.length).toEqual(1)
    })

    it('the q element contains a link', () => {
      expect(target.find('a').length).toEqual(1)
    })
  })

  context('citation as a string', () => {
    const subject = shallow(<QuoteSection citation={'ha'}/>)
    const target = subject.find('cite')

    it('renders cite element', () => {
      expect(target.length).toEqual(1)
    })
    it('has one child', () => {
      expect(target.children().length).toEqual(1)
    })
    it('renders the input we give it', () => {
      expect(target.children().first().text()).toEqual('ha')
    })
  })

  context('citation that is an array of one entry', () => {
    const subject = shallow(<QuoteSection citation={['ha']}/>)
    const target = subject.find('cite')

    it('renders cite element', () => {
      expect(target.length).toEqual(1)
    })
    it('has one child', () => {
      expect(target.children().length).toEqual(1)
    })
    it('renders the input we give it', () => {
      expect(target.children().first().text()).toEqual('ha')
    })
  })

  context('citation that is an array of multiple entries', () => {
    const citations = [ 'one', 'two', 'three', 'four' ]
    const subject = shallow(<QuoteSection citation={citations}/>)
    const target = subject.find('cite')

    it('renders cite element', () => {
      expect(target.length).toEqual(1)
    })
    it('has one child', () => {
      expect(target.children().length).toEqual(4)
    })
    it('renders the all input we give it', () => {
      target.children().forEach((child, index) => {
        expect(child.text()).toEqual(citations[index])
      })
    })
  })
})
