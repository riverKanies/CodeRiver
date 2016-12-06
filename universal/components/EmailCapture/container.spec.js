import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, render, mount } from 'enzyme'

import { actions as messageActions } from 'modules/Messages'
import { actions as analyticsActions } from 'modules/Middleware/analytics'

import { WithProvider } from 'lib/testHelpers'

import EmailCapture, { handleSubmit } from './container'
import { FormHeader } from './component'

describe('(Container) EmailCapture', () => {
  context('redux form helpers', () => {
    const wrapper = shallow(<EmailCapture />)

    it('should require a valid email', () => {
      const expectedResult = wrapper.props().validate()

      expect(Object.keys(expectedResult)).toContain('email')
    })

    it('should accept a valid email', () => {
      const expectedResult = wrapper.props().validate({'email': 'test@test.com'})

      expect(Object.keys(expectedResult)).not.toContain('email')
    })
  })

  context('component specs', () => {
    it('renders a message when we pass the message', () => {
      const subject = shallow(<FormHeader message='message!' title='title' />)
      const titleLine = subject.find('#emailCaptureTitleLine').first()
      expect(titleLine.text()).toEqual('message!')
    })

    it("renders a title when we don't pass the message", () => {
      const subject = shallow(<FormHeader title='title' />)
      const titleLine = subject.find('#emailCaptureTitleLine').first()
      expect(titleLine.text()).toEqual('title')
    })

    it('the container renders the form header', () => {
      const subject = mount(
        <WithProvider>
          <EmailCapture />
        </WithProvider>
      )

      expect(subject.find('FormHeader').length).toEqual(1)
    })
  })

  context('redux form integration tests', () => {
    let onSubmit;
    let subject;

    beforeEach(() => {
      onSubmit = jest.fn(() => Promise.resolve())
      const props = { onSubmit }
      subject = mount(
        <WithProvider>
          <EmailCapture {...props} />
        </WithProvider>
      )
    })

    it('fails to submit when we have an in-valid email address', () => {
      const form = subject.find('form')
      const input = subject.find('input').first()

      input.simulate('change', { target: { value: 'blueberry' } })
      form.simulate('submit')

      expect(onSubmit.mock.calls.length).toBe(0)
    })

    it('submits when we have a valid email address', () => {
      const form = subject.find('form')
      const input = subject.find('input').first()

      input.simulate('change', { target: { value: 'test@email.com' } })
      form.simulate('submit')

      expect(onSubmit.mock.calls.length).toBe(1)
    })
  })

  context('redux form handle submit side effects', () => {
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
