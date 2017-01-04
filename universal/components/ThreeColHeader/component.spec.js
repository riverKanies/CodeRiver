import React from 'react'
import ThreeColHeader from './component'
import { shallow } from 'enzyme'

describe('(Component) ThreeColHeader', () => {
  it('should render ok without any props, defaults to default', () => {
    const subject = shallow(<ThreeColHeader />)

    const target = subject.find('.threeColHeader')

    expect(target.length).toEqual(1)
  })
  it('should render three content columns', () => {
    const subject = shallow(<ThreeColHeader />)

    const target = subject.find('.contentColumn')

    expect(target.length).toEqual(3)
  })
})
