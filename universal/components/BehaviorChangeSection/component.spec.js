import React from 'react'
import BehaviorChangeSection from './component'
import styles from './styles'
import { shallow, mount } from 'enzyme'

describe('(Component) BehaviorChangeSection', () => {
  context('using default props', () => {
    const subject = shallow(<BehaviorChangeSection />)

    it('should exist', () => {
      const target = subject.find('h2')

      expect(target.length).toEqual(1)
    })
  })

  context('when we pass in our own properties', () => {
    const BehaviorProps = {
      title: 'Test title',
      details: [
        `This is a test detail paragraph`
      ]
    }

    const subject = shallow(<BehaviorChangeSection {...BehaviorProps} />)

    it('renders component with a title', () => {
      const target = subject.find('h2')

      expect(target.text()).toEqual('Test title')
    })

    it('renders component with detail', () => {
      const target = subject.find('section > section > div')

      expect(target.text()).toEqual('This is a test detail paragraph')
    })
  })
})
