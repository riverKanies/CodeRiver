import React from 'react'
import Footer from './component'
import { routesParser } from 'react-router-sitemap'
import createRoutes from 'routes'
import createStore from 'store/createStore'

import { shallow } from 'enzyme'

describe('(Component) Footer', () => {
  const subject = shallow(<Footer />)
  it('renders the footer element', () => {
    expect(subject.find('footer').length).toEqual(1)
  })

  context('footer links', () => {
    const expectedLinks = [
      { route: '/about', text: 'About Us' },
      { route: '/careers', text: 'Careers' },
      { route: '/contact', text: 'Contact' },
      { route: '/about/corporate', text: 'Partnerships - Corporate' },
      { route: '/about/content', text: 'Partnerships - Media' },
      { route: '/about/commerce', text: 'Partnerships - Commerce' },
      { route: '/press', text: 'Press' },
      { route: 'https://shop.thriveglobal.com/#', text: 'Pop-up Store' },
      { route: '/team', text: 'Team' },
      { route: '/thrive/privacy', text: 'Privacy' },
      { route: '/thrive/terms', text: 'Terms' },
    ]

    const target = subject.find('#footerLinks')

    function elemType (elem) {
      return elem.find('Link').length > 0 ? 'Link' : 'a'
    }

    function getText (elem) {
      if (elemType(elem) === 'a') {
        return elem.find('a').text()
      }
      return elem.find('Link').children().first().text()
    }

    function getLinkLocation (elem) {
      if (elemType(elem) === 'a') {
        return elem.find('a').props().href
      }
      return elem.find('Link').props().to
    }

    it('renders the correct amount of links', () => {
      expect(target.children().length).toEqual(expectedLinks.length)
    })

    it('has the correct link text for each link', () => {
      target.children().forEach((link, idx) => {
        expect(getText(link)).toEqual(expectedLinks[idx].text)
      })
    })

    it('has the correct location for each link', () => {
      target.children().forEach((link, idx) => {
        expect(getLinkLocation(link)).toEqual(expectedLinks[idx].route)
      })
    })

    it('renders external links if we need to use an anchor tag', () => {
      target.children().forEach((link, idx) => {
        const expectedElem = expectedLinks[idx].route.match('#') ? 'a' : 'Link'
        expect(elemType(link)).toEqual(expectedElem)
      })
    })
  })

})
