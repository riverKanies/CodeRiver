import React from 'react'
import { shallow } from 'enzyme'
import HeaderQuote from './component'

describe('(Component) HeaderQuote', () => {
  it('renders quote when we pass author and quote', () => {
    const props = {
      author: 'bill',
      quote: 'this is the quote'
    }

    const subject = shallow(<HeaderQuote {...props} />)
    const quoteParagraph = subject.find('p')

    expect(quoteParagraph.length).toBe(1)
    expect(quoteParagraph.text()).toEqual('this is the quote')

    const authorSpan = subject.find('span')

    expect(authorSpan.length).toBe(1)
    expect(authorSpan.text()).toEqual('bill')
  })

  it('does not render without a quote and author', () => {

    const subject = shallow(<HeaderQuote />)
    const wrapper = subject.find('div')

    expect(wrapper.length).toBe(0)
  })

  it('renders quote without an author', () => {
    const props = {
      quote: 'this is the quote'
    }

    const subject = shallow(<HeaderQuote {...props} />)
    const wrapper = subject.find('p')

    expect(wrapper.length).toBe(1)

    const authorSpan = subject.find('span')

    expect(authorSpan.length).toBe(0)
  })
})
