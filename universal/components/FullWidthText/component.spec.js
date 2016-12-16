import React from 'react'
import FullWidthText from './component'
import { render } from 'enzyme'

describe('(Component) FullWidthText', () => {
  it('should render sectionText as HTML', () => {
    const subject = render(<FullWidthText sectionText={['Test <a href="#">Test</a>', 'Test 2']} />)
    const target = subject.find('a')
    expect(target.length).toEqual(1)
  })
})
