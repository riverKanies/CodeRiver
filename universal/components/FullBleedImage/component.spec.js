import React from 'react'
import FullBleedImage from './component'
import { shallow } from 'enzyme'

describe('(Component) FullBleedImage', () => {
  it('should render an image', () => {
    const subject = shallow(<FullBleedImage />)

    const target = subject.find('img')

    expect(target.length).toEqual(1)
  })
})
