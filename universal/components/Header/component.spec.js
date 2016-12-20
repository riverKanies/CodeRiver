import React from 'react'
import { Header } from './component'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  context('redendering default without any props', () => {
    const subject = shallow(<Header />)

    it('should render the header section', () => {
      const target = subject.find('header')

      expect(target.length).toEqual(1)
    })

    it('should render the main nav setion', () => {
      const target = subject.find('MainNav')

      expect(target.length).toEqual(1)
    })

    it('should render the logo', () => {
      const target = subject.find('ThriveLogo')

      expect(target.length).toEqual(1)
    })

    it('should render the nav drawer button', () => {
      const target = subject.find('NavButton')

      expect(target.length).toEqual(1)
    })

    it('renders the little header by default', () => {
      const target = subject.find('#littleHeader')

      expect(target.length).toEqual(1)
    })

    it('toggles active to when we click the navButtonWrapper', () => {
      const initialActive = subject.state('active')
      const target = subject.find('#navButtonWrapper')

      target.simulate('click')

      expect(subject.state('active')).toEqual(!initialActive)
    })

    it('sets the state to inactive when we click a link', () => {
      subject.setState({ active: true })

      expect(subject.state('active')).toEqual(true)

      const target = subject.find('#linkHome')
      target.simulate('click')

      expect(subject.state('active')).toEqual(false)
    })
  })

  context('when rendered on the home page', () => {
    it('renders a big hero on pathname "/"', () => {
      const subject = shallow(<Header pathname='/' />)

      const target = subject.find('#bigHeader')
      const shouldMiss = subject.find('#littleHeader')

      expect(target.length).toEqual(1)
      expect(shouldMiss.length).toEqual(0)
    })

    it('renders a big hero on pathname "/home"', () => {
      const subject = shallow(<Header pathname="/home" />)

      const target = subject.find('#bigHeader')
      const shouldMiss = subject.find('#littleHeader')

      expect(target.length).toEqual(1)
      expect(shouldMiss.length).toEqual(0)

    })
  })
  context('when logged in', () => {
    const subject = shallow(<Header isLoggedIn />)

    it('renders the logout action', () => {

      const target = subject.find('#navLogout')

      expect(target.length).toEqual(1)
    })
    it('renders the profile link', () => {

      const target = subject.find('#navProfile')

      expect(target.length).toEqual(1)
    })
  })

  context('when logged out', () => {
    const subject = shallow(<Header isLoggedIn={false} />)

    it('renders the login action', () => {

      const target = subject.find('#navLogin')

      expect(target.length).toEqual(1)
    })

    it('renders the sign up link', () => {

      const target = subject.find('#navSignUp')

      expect(target.length).toEqual(1)
    })
  })

})
