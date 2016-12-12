import React from 'react'
import { shallow } from 'enzyme'
import JourneyHeader from './component'

describe('(Component) JourneyHeader', () => {
  it('renders fine with just a title', () => {
    const subject = shallow(<JourneyHeader title="TITLE" />)
    const target = subject.find('#journeyHeaderTitle')

    expect(target.length).toBe(1)
    expect(target.text()).toEqual('TITLE')
  })

  it('has a HeaderQuote component and passes the author and quote to that', () => {
    const props = {
      title: 'title',
      author: 'bob',
      quote: 'quoted'
    }
    const subject = shallow(<JourneyHeader  {...props} />)
    const target = subject.find('HeaderQuote')

    expect(target.length).toBe(1)
    expect(target.props()).toEqual({ author: props.author, quote: props.quote })
  })
})
