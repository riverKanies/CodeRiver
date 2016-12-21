import React from 'react'
import FullscreenBanner from './component'
import { shallow } from 'enzyme'

describe('(Component) FullscreenBanner', () => {

  context('should render ok with default props', () => {
    const subject = shallow(<FullscreenBanner />)

    it('has a section class banner', () => {
      const target = subject.find('.banner')

      expect(target.length).toEqual(1)
    })

    it('has an background image', () => {
      const target = subject.find('img')

      expect(target.length).toEqual(1)
    })

    it('renders the written content', () => {
      const target = subject.find('.bannerContent')

      expect(target.length).toEqual(1)
    })

    it('renders the default title', () => {
      const target = subject.find('h1')

      expect(target.length).toEqual(1)
      expect(target.text()).toEqual('Title')
    })

    it('renders the default banner text', () => {
      const target = subject.find('p')

      expect(target.length).toEqual(1)
      expect(target.text()).toEqual('Hello, I am text!')
    })

  })
})
