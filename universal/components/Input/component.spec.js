import React from 'react'
import Input from './component'

import { shallow } from 'enzyme'

describe('(Component) Input', () => {
  const defaultProps = {
    input: null,
    label: null,
    type: 'text',
    meta: {}
  }

  it('renders a label when one is passed in', () => {
    const props = { ...defaultProps, label: 'ohai' }

    const wrapper = shallow(<Input {...props} />)
    const element = wrapper.find('label')

    expect(element.length).toBe(1)
    expect(element.text()).toBe('ohai')
  })

  it('renders warning if present and touched', () => {
    const props = { ...defaultProps, meta: { touched: true, warning: 'warning: missing' } }

    const wrapper = shallow(<Input {...props} />)
    const element = wrapper.find('Warning')

    expect(element.length).toBe(1)
  })

  it('renders no warning if present and not touched', () => {
    const props = { ...defaultProps, meta: { touched: false, warning: 'warning: missing' } }

    const wrapper = shallow(<Input {...props} />)
    const element = wrapper.find('.warning')

    expect(element.length).toBe(0)
  })

  it('renders error if present and touched', () => {
    const props = { ...defaultProps, meta: { touched: true, error: 'error: missing' } }

    const wrapper = shallow(<Input {...props} />)
    const element = wrapper.find('Error')

    expect(element.length).toBe(1)
  })

  it('renders no error if present and not touched', () => {
    const props = { ...defaultProps, meta: { touched: false, error: 'error: missing' } }

    const wrapper = shallow(<Input {...props} />)
    const element = wrapper.find('Error')

    expect(element.length).toBe(0)
  })
})
