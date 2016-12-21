import React from 'react'
import TwoColImage from './component'
import image_one from './assets/defaultImage.png'
import image_two from './assets/image2.png'

import { shallow, mount } from 'enzyme'

describe('(Component) TwoColImage', () => {
  context('using default props', () => {
    const subjectShallow = shallow(<TwoColImage />)
    const subjectMount = mount(<TwoColImage />)

    it('should exist', () => {
      const target = subjectShallow.find('h2')

      expect(target.length).toEqual(1)
    })

    it('renders component without link', () => {
      const target = subjectShallow.find('a')

      expect(target.length).toEqual(0)
    })

    it('renders component with two images', () => {
      const target = subjectMount.find('img')

      expect(target.length).toEqual(2)
    })
  })

  context('when we pass in our own properties', () => {
    const defaultVideoImages = [
      {
        image: image_one,
        link: 'http://bit.ly/2hsPF04',
        caption: 'MSNBC\'s Morning Joe'
      },
      {
        image: image_two,
        link: 'https://www.bloomberg.com/news/videos/2016-12-07/arianna-huffington-s-mission-to-end-the-burnout-epidemic',
        caption: 'Bloomberg Technology'
      }
    ]

    const videoImages = {
      bgColor: 'default',
      hasTitle: 'titleTrue',
      title: 'Other Press',
      images: defaultVideoImages
    }
    const subject = mount(<TwoColImage {...videoImages} />)

    it('renders component with link', () => {
      const target = subject.find('a')

      expect(target.length).toEqual(2)
    })

    it('renders component with two images', () => {
      const target = subject.find('img')

      expect(target.length).toEqual(2)
    })

    it('renders component with title', () => {
      const target = subject.find('h2')

      expect(target.length).toEqual(1)
    })

    it('renders component with two captions', () => {
      const target = subject.find('figcaption')

      expect(target.length).toEqual(2)
    })
  })
})
