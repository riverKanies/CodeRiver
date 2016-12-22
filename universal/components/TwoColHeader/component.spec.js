import React from 'react'
import TwoColHeader from './component'
import { shallow } from 'enzyme'

describe('(Component) TwoColText', () => {
  context('using default props', () => {
    const subject = shallow(<TwoColHeader />)

    it('should exist', () => {
      const target = subject.find('h1')

      expect(target.length).toEqual(1)
    })
  })

  context('when passing in our own properties', () => {
    const colTextOneText = ['Test 1']
    const colTextOneTwo = ['Test 2']

    const twoColHeaderProps = {
      bgColor: 'default',
      marginBottom: 'marginTrue',
      hasTitle: 'titleTrue',
      hasSubTitle: 'subTitleTrue',
      subTitle: 'Test Subtitle',
      title: 'Test Title',
      colTextOne: colTextOneText,
      colTextTwo: colTextOneTwo
    }

    const subject = shallow(<TwoColHeader {...twoColHeaderProps} />)

    it('renders passed in title', () => {
      const target = subject.find('h1')

      expect(target.text()).toEqual(twoColHeaderProps.title)
    })

    it('renders passed in subtitle', () => {
      const target = subject.find('h3')

      expect(target.text()).toEqual(twoColHeaderProps.subTitle)
    })

    it('renders passed in text for column one', () => {
      const target = subject.find('section > div > section > div')

      expect(target.first().text()).toEqual(twoColHeaderProps.colTextOne[0])
    })

    it('renders passed in text for column two', () => {
      const target = subject.find('section > div > section > div')

      expect(target.at(1).text()).toEqual(twoColHeaderProps.colTextTwo[0])
    })
  })
})
