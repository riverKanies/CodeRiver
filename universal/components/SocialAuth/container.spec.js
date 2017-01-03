import React from 'react'
import { SocialAuth } from './container'
import { shallow, mount } from 'enzyme'
import { checkSession } from 'modules/UserSession'

import * as http from 'lib/http'

describe('(Container) Social Auth', () => {
  context('basic use case', () => {
    const basicRouter = {
      location: {
        query: { }
      }
    }
    const dispatch = () => { }
    const subject = shallow(<SocialAuth {...basicRouter} dispatch={dispatch}/>)

    it('has two links', () => {
      const target = subject.find('ExternalLink')
      expect(target.length).toEqual(2)
    })

    it('contains a facebook auth link', () => {
      const target = subject.find('ExternalLink')
      expect(target.first().props().linkTo).toMatch(/facebook/)
    })

    it('contains a twitter auth link', () => {
      const target = subject.find('ExternalLink')
      expect(target.last().props().linkTo).toMatch(/twitter/)
    })
  })

  context('when we have an error', () => {
    it('displays the errors', () => {
      const basicRouter = {
        location: {
          query: {
            error: 'there was an error'
          }
        }
      }
      const dispatch = () => { }
      const subject = shallow(<SocialAuth {...basicRouter} dispatch={dispatch}/>)
      const target = subject.find('#authErrors')
      expect(target.text()).toEqual('there was an error')
    })
  })
  context('when we are succesful with auth and have url session params', () => {
    const dispatch = jest.fn()
    const router = {
      push: jest.fn()
    }
    const location = {
      query: {
        client_id: 'client',
        auth_token: 'token',
        uid: 'UID'
      }
    }

    const subject = mount(<SocialAuth
      dispatch={dispatch}
      router={router}
      location={location}
    />)

    it('saves the headers to local storage', () => {
      const headers = http.getLocalStorageHeaders()

      expect(headers['access-token']).toEqual('token')
      expect(headers['client']).toEqual('client')
      expect(headers['uid']).toEqual('UID')
    })

    it('checks the session', () => {
      // slightly brittle test here, but we are checking that we are triggering
      // user-session redux events
      dispatch.mock.calls[0][0].types.forEach((t) => {
        expect(t).toMatch('user-session')
      })
    })

    it('redirects to home', () => {
      expect(router.push).toHaveBeenCalledWith('/')
    })
  })
})
