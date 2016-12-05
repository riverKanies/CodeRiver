import React from 'react'
import { WithProvider } from 'lib/testHelpers'
import { shallow, render, mount } from 'enzyme'
import { createMessage } from 'modules/Messages'

import EmailCaptureMini from './container'
import { FormHeader } from './component'

describe('(Container) EmailCaptureMini', () => {
  context('ReduxForm validations', () => {
    const wrapper = shallow(<EmailCaptureMini />)

    it('should require a valid email', () => {
      const expectedResult = wrapper.props().validate()

      expect(Object.keys(expectedResult)).toContain('email')
    })

    it('should accept a valid email', () => {
      const expectedResult = wrapper.props().validate({'email': 'test@test.com'})

      expect(Object.keys(expectedResult)).not.toContain('email')
    })
  })

  context('Form Header Component attributes', () => {
    it("should not render a message if we don't pass one in", () => {
      const subject = shallow(
        <FormHeader title="title" />
      )

      expect(subject.find('#emailCaptureMiniMessage').length).toEqual(0)

    })

    it('should render a message when we pass one in', () => {
      const subject = shallow(
        <FormHeader message="message" title="title" />
      )

      expect(subject.find('#emailCaptureMiniMessage').length).toEqual(1)

    })

    it('renders a form header', () => {
      const subject = mount(
        <WithProvider>
          <EmailCaptureMini message="message" />
        </WithProvider>
      )

      expect(subject.find('FormHeader').length).toEqual(1)
    })
  })
})

