import React from 'react'
import TwoColQuote from './component'

import { shallow } from 'enzyme'

describe('(Component) TwoColQuote', () => {
  context('using only the default props (storybook only)', () => {
    it('should render ok without any props, defaults to default', () => {
      const subject = shallow(<TwoColQuote />)

      const target = subject.find('.quoteSection')

      expect(target.length).toEqual(2)
    })
  })

  context('when we pass in our own properties', () => {
    const props = {
      bgColor: 'white',
      byElement: 'hideBy',
      quoteURL: 'https://www.ft.com/content/a4322038-bc09-11e6-8b45-b8b81dd5d080',
      quoteURL2:
      'http://www.nytimes.com/2016/12/04/nyregion/not-sleeping-enough-arianna-huffington-wants-to-help.html?_r=0',
      quoteFont: 'Playfair',
      citation: 'Financial Times',
      citation2: 'The New York Times',
      quote: `Four weeks later, I can report that Huffington has changed my life...
      bedtime now means bedtime: a phase of leaving the day behind.`,
      quote2: `Not Sleeping Enough? Arianna Huffington Wants to Help.`
    }
    const subject = shallow(<TwoColQuote {...props}/>)

    it('it renders two quotes', () => {
      const target = subject.find('.quoteSection')

      expect(target.length).toEqual(2)
    })

    it('renders both citations correctly', () => {
      const target = subject.find('cite > p')

      expect(target.length).toEqual(2)
      expect(target.first().text()).toEqual('Financial Times')
      expect(target.last().text()).toEqual('The New York Times')
    })

    it('renders both links correctly', () => {
      const target = subject.find('a')

      expect(target.length).toEqual(2)
      expect(target.first().text()).toMatch('Four weeks later')
      expect(target.last().text()).toMatch('Not Sleeping')
    })
  })
})
