import React from 'react'
import TitleWithText from './component'
import { render, shallow } from 'enzyme'

describe('(Component) TitleWithText', () => {
  context('deep render passed in html', () => {
    const subject = render(<TitleWithText title='MEMEME' description='Test <em>Test</em>' />)
    it('should render description as HTML', () => {
      const target = subject.find('em')

      expect(target.length).toEqual(1)
    })
  })

  context('default use case', () => {
    const subject = shallow(<TitleWithText title='MEMEME' description='Test <em>Test</em>' />)

    it('should have an h2 with the title we pass in', () => {
      const target = subject.find('h2')

      expect(target.text()).toEqual('MEMEME')
    })

    it('renders no button by default', () => {
      const target = subject.find('Button')

      expect(target.length).toEqual(0)
    })
  })

  context('with button props', () => {
    const subject = shallow(<TitleWithText buttonProps={{'foo': 'bar'}} />)

    it('renders a button', () => {
      const target = subject.find('Button')

      expect(target.length).toEqual(1)
    })
  })
})
