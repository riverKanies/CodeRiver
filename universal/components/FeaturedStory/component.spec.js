import React from 'react'
import FeaturedStory from './component'
import { shallow } from 'enzyme'

describe('(Component) FeaturedStory', () => {
  context('FeaturedStory with default props', () => {
    const subject = shallow(<FeaturedStory />)

    it('should render ok with the default props', () => {
      const target = subject.find('section')

      expect(target.length).toEqual(1)
    })

    it('renders a default title', () => {
      const target = subject.find('h2')

      expect(target.length).toEqual(1)
      expect(target.text()).toEqual('Title')
    })

    it('renders one paragraph of default text', () => {
      const target = subject.find('.copyContent')

      expect(target.length).toEqual(1)
    })
  })

  // bgLink
  context('bgLink true', () => {
    const subject = shallow(<FeaturedStory bgLink={true} />)

    it('renders no section wrapped in an <a>', () => {
      const target = subject.find('section > a')

      expect(target.length).toEqual(1)
    })
  })
  context('bgLink false', () => {
    const subject = shallow(<FeaturedStory bgLink={false} />)

    it('renders no section wrapped in an <a>', () => {
      const target = subject.find('section > a')

      expect(target.length).toEqual(0)
    })
  })

  // hasLabel
  context('hasLabel true', () => {
    const subject = shallow(<FeaturedStory hasLabel={true} />)

    it('renders a content label', () => {
      const target = subject.find('label')

      expect(target.length).toEqual(1)
      expect(target.text()).toEqual('Stories')
    })
  })
  context('hasLabel false', () => {
    const subject = shallow(<FeaturedStory hasLabel={false} />)

    it('renders a content label', () => {
      const target = subject.find('label')

      expect(target.length).toEqual(0)
    })
  })

  // hasAuthor
  context('hasAuthor true', () => {
    const subject = shallow(<FeaturedStory hasAuthor={true} />)

    it('renders a content label', () => {
      const target = subject.find('span')

      expect(target.length).toEqual(1)
    })
  })
  context('hasAuthor false', () => {
    const subject = shallow(<FeaturedStory hasAuthor={false} />)

    it('renders a content label', () => {
      const target = subject.find('span')

      expect(target.length).toEqual(0)
    })
  })

  // hasButton
  context('hasButton true', () => {
    const subject = shallow(<FeaturedStory hasButton={true} />)

    it('renders no button', () => {
      const target = subject.find('ExternalLink')

      expect(target.length).toEqual(1)
    })
  })
  context('hasButton false', () => {
    const subject = shallow(<FeaturedStory hasButton={false} />)

    it('renders no button', () => {
      const target = subject.find('ExternalLink')

      expect(target.length).toEqual(0)
    })
  })

})
