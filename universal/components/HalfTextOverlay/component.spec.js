import React from 'react'
import HalfTextOverlay from './component'
import { shallow } from 'enzyme'

describe('(Component) HalfTextOverlay', () => {
  context('with sectionText defined', () => {
    const sectionText = [`Hello this is the text`,`Hello this some more text`]
    const subject = shallow(<HalfTextOverlay sectionText={sectionText} hasButton={true} />)

    it('should exist', () => {
      const target = subject.find('h2')

      expect(target.length).toEqual(1)
    })

    it('has two paragraphs', () => {
      const target = subject.find('p')

      expect(target.length).toEqual(2)
    })

    it('should render links', () => {
      const target = subject.find('a')

      expect(target.length).toEqual(2)
    })

    it('should render a button', () => {
      const target = subject.find('span')

      expect(target.length).toEqual(2)
    })
  })
  context('with no sectionText defined', () => {
    const subject = shallow(<HalfTextOverlay hasButton={true} />)

    it('should not exist', () => {
      const target = subject.find('section')

      expect(target.length).toEqual(0)
    })
  })
})
