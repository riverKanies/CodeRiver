import React from 'react'
import BrandRow from './component'
import { shallow, mount } from 'enzyme'

import logo_one from './assets/logo_one.jpg'

describe('(Component) BrandRow', () => {
  context('default case', () => {
    it('renders the standard logo bars', () => {
      const subject = shallow(<BrandRow />)

      const target = subject.find('Logo')
      expect(target.length).toEqual(5)
    })

    it('has no links', () => {
      const subject = mount(<BrandRow />)

      const target = subject.find('a')
      expect(target.length).toEqual(0)
    })
  })

  context('with images and links', () => {
    const logos = [
      { logoImage: logo_one, link: 'http://www.cats.com' },
      { logoImage: logo_one, link: 'http://www.dogs.com' },
      { logoImage: logo_one, link: 'http://www.hamsters.com' }
    ]

    it('has three logos', () => {
      const subject = mount(<BrandRow logos={logos} />)

      const target = subject.find('img')
      expect(target.length).toEqual(3)
    })

    it('has three links', () => {
      const subject = mount(<BrandRow logos={logos} />)

      const target = subject.find('a')
      expect(target.length).toEqual(3)
    })

    it('has the correct link on each logo', () => {
      const subject = mount(<BrandRow logos={logos} />)

      const target = subject.find('a')
      target.forEach((t, i) => {
        expect(t.props().href).toEqual(logos[i].link)
      })
    })
  })

  context('with images and no links', () => {
    const logos = [
      { logoImage: logo_one },
      { logoImage: logo_one }
    ]

    it('has two logos', () => {
      const subject = mount(<BrandRow logos={logos} />)

      const target = subject.find('img')
      expect(target.length).toEqual(2)
    })

    it('has no links', () => {
      const subject = mount(<BrandRow logos={logos} />)

      const target = subject.find('a')
      expect(target.length).toEqual(0)
    })
  })
})
