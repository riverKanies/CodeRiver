import React from 'react'
import MiscSection from './component'

import { mount } from 'enzyme'

describe('(MiscSection) component', () => {
  it('has five external links', () => {
    const subject = mount(<MiscSection />)

    expect(subject.find('ExternalLink').length).toEqual(5)
  })
})
