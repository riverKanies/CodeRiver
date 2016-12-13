import ExternalLink from './component'
import React from 'react'

import { shallow , mount} from 'enzyme'

describe('an ExternalLink Component', () => {
  it('renders ok with default props', () => {
    const subject = shallow(<ExternalLink />)

    expect(subject.find('a').length).toEqual(1)
  })

  it('renders button text without children', () => {
    const subject = shallow(<ExternalLink linkText='hi' />)

    expect(subject.find('a').props()["children"]).toEqual('hi')
  })

  it('renders button with children', () => {
    const subject = mount(
      <ExternalLink linkText='hi'>
        <p>hello</p>
        <p>hello</p>
      </ExternalLink>
    )

    expect(subject.find('a').children().length).toEqual(2)
  })
})
