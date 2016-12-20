import React from 'react'
import { render, mount } from 'enzyme'
import Journey from './component'

const props = {
  journey: {title: 'Test', quote: 'Test', author: 'Test'},
  microsteps: [{id: 1, description: 'Test', attribution: 'Test', type: 'Quote'},
               {id: 2, description: 'Test', attribution: 'Test', type: 'Quote'}],
  pathway: {share_text: 'Test Share Text'}
};

describe('<Journey />', () => {
  it('should not render a <Journey /> when there are no props', () => {
    const wrapper = render(<Journey />)
    expect(wrapper.html()).toBe('')
  })

  it('should render a <Journey />', () => {
    const wrapper = render(<Journey {...props}/>)
    const element = wrapper.find('#journeys')

    expect(element.length).toBe(1)
  })

  it('should render a share link for each microstep', () => {
    const wrapper = mount(<Journey {...props}/>)
    const element = wrapper.find('ExternalLink')

    expect(element.length).toBe(2)
  })

  it('share link should contain share text', () => {
    const wrapper = mount(<Journey {...props}/>)
    const element = wrapper.find('ExternalLink').first()

    expect(element.props().linkTo).toContain(props.pathway.share_text)
  })
})
