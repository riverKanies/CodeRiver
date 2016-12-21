import React from 'react'
import FullscreenBanner from './component'
import { shallow } from 'enzyme'

describe('(Component) FullscreenBanner', () => {

  context('should render with default props', () => {
    const subject = shallow(<FullscreenBanner />)

    it('has a section class banner', () => {
      const target = subject.find('.banner')

      expect(target.length).toEqual(1)
    })

    it('has a background image', () => {
      const target = subject.find('img')

      expect(target.length).toEqual(1)
    })

    it('renders content in the default position', () => {
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

    it('renders the default height', () => {
      const subject = shallow(<FullscreenBanner height={'fullHeight'} />)
      const target = subject.find('.banner')

      expect(target.length).toEqual(1)
    })

    it('renders default bannerImageOverlay', () => {
      const subject = shallow(<FullscreenBanner bannerImageOverlay={'overlayTrue'} />)
      const target = subject.find('.imageWrap')

      expect(target.length).toEqual(1)
    })
  })

  context('should render content in the position based on the prop', () => {
    const subject = shallow(<FullscreenBanner contentPosition={'bottomLeft'} />)

    it('renders contentPosition as bottomLeft', () => {
      const target = subject.find('.bannerContent')

      expect(target.length).toEqual(1)
    })
  })

  context('banner height', () => {
    it('renders height as fullHeight', () => {
      const subject = shallow(<FullscreenBanner height={'fullHeight'} />)
      const target = subject.find('.banner')

      expect(target.length).toEqual(1)
    })

    it('renders height as halfHeight', () => {
      const subject = shallow(<FullscreenBanner height={'halfHeight'} />)
      const target = subject.find('.banner')

      expect(target.length).toEqual(1)
    })

    it('renders height as quarterHeight', () => {
      const subject = shallow(<FullscreenBanner height={'quarterHeight'} />)
      const target = subject.find('.banner')

      expect(target.length).toEqual(1)
    })

    it('renders height as thirdHeight', () => {
      const subject = shallow(<FullscreenBanner height={'thirdHeight'} />)
      const target = subject.find('.banner')

      expect(target.length).toEqual(1)
    })

    it('renders height as twoThirdsHeight', () => {
      const subject = shallow(<FullscreenBanner height={'twoThirdsHeight'} />)
      const target = subject.find('.banner')

      expect(target.length).toEqual(1)
    })
  })

  context('overlayFalse', () => {
    const subject = shallow(<FullscreenBanner bannerImageOverlay={'overlayFalse'} />)

    it('renders bannerImageOverlay as overlayFalse', () => {
      const target = subject.find('.bannerContent')

      expect(target.length).toEqual(1)
    })
  })

})
