import React from 'react'
import TwoColQuote from './component'

import { shallow } from 'enzyme'

describe('(Component) TwoColQuote', () => {
  it('should render ok without any props, defaults to default', () => {
    const subject = shallow(<TwoColQuote />)

    const target = subject.find('.quoteSection')

    expect(target.length).toEqual(1)
  })
})
