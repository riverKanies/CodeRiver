import React from 'react'
import sinon from 'sinon'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, render, mount } from 'enzyme'

import { actions as messageActions } from 'modules/Messages'
import { actions as analyticsActions } from 'modules/Middleware/analytics'

import { WithProvider } from 'lib/testHelpers'

import EmailCaptureMini, { handleSubmit } from './container'
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

  context('form integration tests', () => {
    let onSubmit;
    let subject;

    beforeEach(() => {
      onSubmit = sinon.stub().returns(Promise.resolve())
      const props = { onSubmit }
      subject = mount(
        <WithProvider>
          <EmailCaptureMini {...props} />
        </WithProvider>
      )
    })

    it('fails to submit when we have an in-valid email address', () => {
      const form = subject.find('form')
      const input = subject.find('input').first()

      input.simulate('change', { target: { value: 'blueberry' } })
      form.simulate('submit')

      expect(onSubmit.callCount).toEqual(0)
    })

    it('submits when we have a valid email address', () => {
      const form = subject.find('form')
      const input = subject.find('input').first()

      input.simulate('change', { target: { value: 'test@email.com' } })
      form.simulate('submit')

      expect(onSubmit.callCount).toEqual(1)
    })
  })

  context('handleSubmit redux action side-effects', () => {
    const middlewares = [ thunk ]
    const mockStore = configureMockStore(middlewares)
    let store;
    let values;

    beforeEach(() => {
      store = mockStore({})
      values = { email: 'bill@email.com' }
    })

    it('resets the email to an empty string', () => {
      handleSubmit(values, store.dispatch)

      expect(values.email).toEqual('')
    })

    it('dispatches specific action types', () => {
      const actionTypes = [
        analyticsActions.newsletterFormSubmitted,
        messageActions.createMessage
      ]
      handleSubmit(values, store.dispatch)

      const resultingActionTypes = store.getActions().map(a => a.type)

      expect(resultingActionTypes).toEqual(actionTypes)
    })
  })
})

