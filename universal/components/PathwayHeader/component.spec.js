import React from 'react'
import { shallow } from 'enzyme'
import PathwayHeader from './component'

describe('(Component) PathwayHeader', () => {
  context('default use case', () => {
    it('renders fine with just a title', () => {
      const subject = shallow(<PathwayHeader title="TITLE" />)
      const target = subject.find('h2')

      expect(target.length).toBe(1)
      expect(target.text()).toEqual('TITLE')
    })

    it('has a HeaderQuote component and passes the author and quote to that', () => {
      const props = {
        title: 'title',
        author: 'bob',
        quote: 'quoted'
      }
      const subject = shallow(<PathwayHeader  {...props} />)
      const target = subject.find('HeaderQuote')

      expect(target.length).toBe(1)
      expect(target.props()).toEqual({ author: props.author, quote: props.quote })
    })
  })
})
