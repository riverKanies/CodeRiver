import React from 'react'
import ContentLabel from './component'
import { shallow } from 'enzyme'

describe('(Component) ContentLabel', () => {
  context('default props', () => {
    const subject = shallow(<ContentLabel />)

    it('renders no lable if we dont pass one in', () => {
      const target = subject.find('i')

      expect(target.length).toEqual(0)
    })
  })

  context('should render with the proper labelColor and label', () => {
    const props = { label: 'label' }
    it('renders the labelColor tealLabel', () => {
      const subject = shallow(<ContentLabel {...props} labelColor={'tealLabel'} />)
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })

    it('renders the labelColor blueLabel', () => {
      const subject = shallow(<ContentLabel {...props} labelColor={'blueLabel'} />)
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })
  })

})
