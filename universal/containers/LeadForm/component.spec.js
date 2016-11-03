import React from 'react'
import { shallow } from 'enzyme'

import LeadForm from './component'

describe('(Component) LeadForm', () => {
  it('should render the success message with submitSucceeded ', () => {
    const wrapper = shallow(<LeadForm submitSucceeded />)
    const element = wrapper.find('ThankYou')

    expect(element.length).toBe(1)
  })

  it('should not render the success message without submitSucceeded ', () => {
    const wrapper = shallow(<LeadForm />)
    const element = wrapper.find('ThankYou')

    expect(element.length).toBe(0)

  })
})
