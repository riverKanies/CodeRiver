import React from 'react'
import FullWidthText from './component'
import { shallow } from 'enzyme'

describe('(Component) FullWidthText', () => {
  context('with sectionText defined', () => {
    const sectionText = [`Hello this is the text`,`Hello this some more text`]
    const subject = shallow(<FullWidthText sectionText={sectionText} />)

    it('should exist', () => {
      const target = subject.find('h2')

      expect(target.length).toEqual(1)
    })

    it('has two paragraphs', () => {
      const target = subject.find('p')

      expect(target.length).toEqual(2)
    })
  })
  context('with no sectionText defined', () => {
    const subject = shallow(<FullWidthText />)

    it('should not exist', () => {
      const target = subject.find('section')

      expect(target.length).toEqual(0)
    })
  })
})
