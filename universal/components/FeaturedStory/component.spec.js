import React from 'react'
import FeaturedStory from './component'
import { shallow } from 'enzyme'

describe('(Component) FeaturedStory', () => {
  it('should exist', () => {
    const subject = shallow(<FeaturedStory />)

    it('should render section container', () => {
      const target = subject.find('section')

      expect(target.length).toEqual(1)
    })

    it('renders a default title', () => {
      const target = subject.find('h2')

      expect(target.length).toEqual(1)
      expect(target.text()).toEqual('Title')
    })

    it('renders default copy content', () => {
      const target = subject.find('.copyContent')

      expect(target.length).toEqual(1)
    })
  })
})
