import React from 'react'
import CalendarMicrostep from './component'

import { shallow } from 'enzyme'

const markdown = `
TEST PARAGRAPH

2nd paragraph. *Italic*, **bold**. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.
`

const microstep = {
  title: 'TITLE',
  description: markdown
}

describe('(Component) CalendarMicrostep', () => {
  it('renders the title', () => {
    const wrapper = shallow(<CalendarMicrostep microstep={microstep} />);
    const element = wrapper.find('h1')
    expect(element.length).toBe(1)
  })
})
