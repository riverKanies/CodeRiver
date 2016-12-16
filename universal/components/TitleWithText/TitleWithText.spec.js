import React from 'react'
import TitleWithText from './component'
import { render } from 'enzyme'

describe('(Component) TitleWithText', () => {
  it('should render description as HTML', () => {
    const subject = render(<TitleWithText title='Test' description='Test <a href="#">Test</a>' />)
    const target = subject.find('a')
    expect(target.length).toEqual(1)
  })
})
