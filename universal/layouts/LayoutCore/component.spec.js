import React from 'react'
import { mount, shallow } from 'enzyme'
import { LayoutCore } from 'layouts/LayoutCore/component'
import whiteLabeled from 'lib/whiteLabeled'
import { toast } from 'modules/Toast'

const ToastContainer = toast.container

const WhiteLabeledHeader = whiteLabeled({
})

describe('<LayoutCore>', () => {
  const wrapper = shallow(<LayoutCore><div>Hello</div></LayoutCore>)
  it('should contain the <ToastContainer />', () => {
    expect(wrapper.contains(<ToastContainer />)).toBe(true)
  })
})
