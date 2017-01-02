import React from 'react'
import configureMockStore from 'redux-mock-store'
import callAPI from 'modules/Middleware/callApi'
import thunk from 'redux-thunk'
import { actions as sessionActions } from 'modules/UserSession'
import { shallow, render, mount } from 'enzyme'
import { WithProvider } from 'lib/testHelpers'

import PasswordResetForm, { onSubmit } from './container'

describe('(Container) PasswordResetForm', () => {
  context('redux form integration tests', () => {
    let onSubmit;
    let subject;

    beforeEach(() => {
      onSubmit = jest.fn(() => Promise.resolve())
      const props = { onSubmit }
      subject = mount(
        <WithProvider>
          <PasswordResetForm {...props} />
        </WithProvider>
      )
    })

    it('fails to submit with an empty form', () => {
      const form = subject.find('form')

      form.simulate('submit')

      expect(onSubmit.mock.calls.length).toBe(0)
    })

    it('fails to submit with an invalid email address', () => {
      const form = subject.find('form')
      const email = subject.find('input[name="email"]')

      email.simulate('change', { target: { value: 'email.com' } })

      subject.find('a').first().simulate('click')

      expect(onSubmit.mock.calls.length).toBe(0)
    })

    it('submits when we have a valid email address', () => {
      const form = subject.find('form')
      const email = subject.find('input[name="email"]')

      email.simulate('change', { target: { value: 'bill@email.com' } })

      subject.find('a').first().simulate('click')

      expect(onSubmit.mock.calls.length).toBe(1)
    })
  })
})
