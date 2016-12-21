import React from 'react'
import BannerSuper from './component'
import { shallow } from 'enzyme'

describe('(Component) BannerSuper', () => {
  context('should render ok without any props, defaults to default', () => {
    const subject = shallow(<BannerSuper />)

    it('has an background image', () => {
      const target = subject.find('.bgImage')

      expect(target.length).toEqual(1)
    })

    it('has a default title', () => {
      const target = subject.find('h1')

      expect(target.text()).toEqual('Title')
    })

    it('has a default button', () => {
      const target = subject.find('ExternalLink')

      expect(target.length).toEqual(1)
    })

    it('has a default content image', () => {
      const target = subject.find('#contentImage')

      expect(target.length).toEqual(1)
    })

    it('has a default content image text', () => {
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })
  })
  context('hasButton false', () => {
    const subject = shallow(<BannerSuper hasButton={false}/>)

    it('has no button', () => {
      const target = subject.find('ExternalLink')

      expect(target.length).toEqual(0)
    })
  })
  context('hasContentImage false', () => {
    const subject = shallow(<BannerSuper hasContentImage={false}/>)

    it('has no content image', () => {
      const target = subject.find('#contentImage')

      expect(target.length).toEqual(0)
    })
  })
  context('hasContentImageText false', () => {
    const subject = shallow(<BannerSuper hasContentImageText={false}/>)

    it('has no content image text', () => {
      const target = subject.find('i')

      expect(target.length).toEqual(0)
    })
  })
})
