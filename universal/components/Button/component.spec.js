import Button from './component'
import React from 'react'

import { shallow , mount} from 'enzyme'

describe('a Button Component', () => {
  it('renders ok with default props', () => {
    const subject = shallow(<Button />)

    expect(subject.find('Link').length).toEqual(1)
  })

  it('renders button text without children', () => {
    const subject = shallow(<Button buttonText='hi' />)

    expect(subject.find('Link').props()["children"]).toEqual('hi')
  })

  it('renders button with children', () => {
    const subject = mount(
      <Button buttonText='hi'>
        <p>hello</p>
        <p>hello</p>
      </Button>
    )

    expect(subject.find('Link').children().length).toEqual(2)
  })
})
