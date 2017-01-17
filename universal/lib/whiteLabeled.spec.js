import React from 'react'
import whiteLabeled from 'lib/whiteLabeled'
import { shallow, mount } from 'enzyme'
import { Header } from 'components/Header/component'
import AccentureHeader from 'components/Header/AccentureHeader'

describe('WhiteLabeledComponent', () => {
  context('initialize', () => {
    const WhiteLabeledComponent = whiteLabeled({})

    it('should require a base', () => {
      expect(() => {
        shallow(<WhiteLabeledComponent subdomain='test' />)
      }).toThrow('WhiteLabeled components require a base case')
    })

    it('should require a subdomain', () => {
      expect(() => {
        shallow(<WhiteLabeledComponent base={<p />} />)
      }).toThrow('WhiteLabeled components require a subdomain')
    })
  })

  context('render', () => {
    const WhiteLabeledComponent = whiteLabeled({
      'accenture': AccentureHeader
    })

    it('should render the default case', () => {
      const wrapper = shallow(
        <WhiteLabeledComponent
          base={Header}
          subdomain='test'
        />
      )

      expect(wrapper.find('Header').length).toBe(1)
    })

    it('should render an AccentureHeader', () => {
      const wrapper = shallow(<WhiteLabeledComponent base={Header} subdomain='accenture' />)

      expect(wrapper.find('AccentureHeader').length).toBe(1)
    })

    it('accenture header should be passed down some props', () => {
      const wrapper = shallow(
        <WhiteLabeledComponent
          base={Header}
          subdomain='accenture'
          foo="bar"
        />)

      expect(wrapper.find('AccentureHeader').props().foo).toEqual('bar')
    })
  })
})
