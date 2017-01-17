import React from 'react'
import { mount, shallow } from 'enzyme'
import { LayoutCore } from 'layouts/LayoutCore/component'
import whiteLabeled from 'lib/whiteLabeled'
import { toast } from 'modules/Toast'

const ToastContainer = toast.container

const WhiteLabeledHeader = whiteLabeled({
})

describe('<LayoutCore>', () => {
  const wrapper = shallow(<LayoutCore subdomain='test'><div>Hello</div></LayoutCore>)
  it('should contain the <WhiteLabeledComponent />', () => {
    expect(wrapper.find('WhiteLabeledComponent').length).toBe(1)
  })
  it('should contain the <ToastContainer />', () => {
    expect(wrapper.contains(<ToastContainer />)).toBe(true)
  })
})
