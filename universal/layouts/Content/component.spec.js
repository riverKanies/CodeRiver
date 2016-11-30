import React from 'react'
import { mount } from 'enzyme'
import { fetchPageById } from './component'

jest.mock('./pages', () => {
  return {
    // TODO: make these tests a little more semantic. `ohai` isn't useful.
    // notfound: { default: 'not-found-component', meta: 'ohai' },
    // happypath: { default: 'found-component', meta: 'ohai' },
    notfound: { default: 'not-found-component'},
    happypath: { default: 'found-component'},
  }
})

describe('fetchPageById', () => {
  it('should handle a bad URL', () => {
    const expectedValues = {
      Page: 'not-found-component'
      //,meta: 'ohai'
    }

    expect(fetchPageById('somethinghorrible')).toEqual(expectedValues)
  })

  it('should properly handle a valid URL', () => {
    const expectedValues = {
      Page: 'found-component'
      //,meta: 'ohai'
    }

    expect(fetchPageById('happypath')).toEqual(expectedValues)
  })
})
