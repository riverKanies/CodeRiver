import React from 'react'
import RequestPasswordResetForm from 'components/RequestPasswordResetForm'
import PasswordResetForm from 'components/PasswordResetForm'
import { PasswordResetLayout as Layout } from './component'
import { mount } from 'enzyme'
import WithProvider from 'lib/testHelpers'

describe('(Component) Login', () => {
  const props = {
    location: {
      query: {
        client_id: 'xxxx',
        token: 'xxxx',
        uid: 'xxxx'
      }
    },
    dispatch: () => Promise.resolve()
  }
  it('renders the request password reset request form if not logged in', () => {
    const subject = mount(
      <WithProvider>
        <Layout {...props} />
      </WithProvider>
    )
    expect(subject.find(PasswordResetForm).length).toEqual(0)
    expect(subject.find(RequestPasswordResetForm).length).toEqual(1)
  })

  xit('renders the password reset request form if logged in', () => {
    const subject = mount(
      <WithProvider>
        <Layout {...props} isLoggedIn />
      </WithProvider>
    )
    expect(subject.find(PasswordResetForm).length).toEqual(1)
    expect(subject.find(RequestPasswordResetForm).length).toEqual(0)
  })
})
