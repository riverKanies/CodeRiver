import React from 'react'
import ContentLabel from './component'
import { shallow } from 'enzyme'

describe('(Component) ContentLabel', () => {
  context('should render with default props', () => {
    const subject = shallow(<ContentLabel />)

    it('renders the element', () => {
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })

    it('renders the default title', () => {
      const target = subject.find('i')

      expect(target.length).toEqual(1)
      expect(target.text()).toEqual('Label Name')
    })

    it('renders with the default labelColor', () => {
      const subject = shallow(<ContentLabel labelColor={'defaultLabel'} />)
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })
  })

  context('should render with the proper labelColor', () => {

    it('renders the labelColor tealLabel', () => {
      const subject = shallow(<ContentLabel labelColor={'tealLabel'} />)
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })

    it('renders the labelColor blueLabel', () => {
      const subject = shallow(<ContentLabel labelColor={'blueLabel'} />)
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })

    it('renders the labelColor darkBlueLabel', () => {
      const subject = shallow(<ContentLabel labelColor={'darkBlueLabel'} />)
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })

    it('renders the labelColor royalBlueLabel', () => {
      const subject = shallow(<ContentLabel labelColor={'royalBlueLabel'} />)
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })

    it('renders the labelColor blurpleLabel', () => {
      const subject = shallow(<ContentLabel labelColor={'blurpleLabel'} />)
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })

    it('renders the labelColor violetLabel', () => {
      const subject = shallow(<ContentLabel labelColor={'violetLabel'} />)
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })

    it('renders the labelColor whiteLabel', () => {
      const subject = shallow(<ContentLabel labelColor={'whiteLabel'} />)
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })
  })

})
