import React from 'react'
import { mount } from 'enzyme'
import { fetchPageById } from './component'

jest.mock('./pages', () => {
  return {
    notfound: { default: 'not-found-component', meta: 'ohai' },
    happypath: { default: 'found-component', meta: 'ohai' },
  }
})

describe('fetchPageById', () => {
  it('should handle a bad URL', () => {
    const expectedValues = {
      Page: 'not-found-component',
      meta: 'ohai'
    }

    expect(fetchPageById('somethinghorrible')).toEqual(expectedValues)
  })

  it('should properly handle a valid URL', () => {
    const expectedValues = {
      Page: 'found-component',
      meta: 'ohai'
    }

    expect(fetchPageById('happypath')).toEqual(expectedValues)
  })
})
