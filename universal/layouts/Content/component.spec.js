import React from 'react'
import { mount } from 'enzyme'
import { fetchPageById } from './component'

jest.mock('./pages', () => {
  return {
    happypath: { default: 'found-component'}
  }
})

describe('fetchPageById', () => {
  it('should handle a bad URL', () => {
    const expectedValues = {
      Page: undefined
    }

    expect(fetchPageById('somethinghorrible')).toEqual(expectedValues)
  })

  it('should properly handle a valid URL', () => {
    const expectedValues = {
      Page: 'found-component'
    }

    expect(fetchPageById('happypath')).toEqual(expectedValues)
  })
})
