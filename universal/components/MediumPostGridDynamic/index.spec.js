import React from 'react'
import { VariableGrid } from './'
import { shallow, mount } from 'enzyme'
import MediumPostGridDynamic from './component'

import * as mediumPosts from 'modules/MediumPosts'
import { WithProvider } from 'lib/testHelpers'

describe('(Component) MediumPostGridDynamic', () => {
  mediumPosts.loadAccenturePages = jest.fn(() => (
    { type: 'accenture' }
  ))
  mediumPosts.loadMediumPosts = jest.fn(() => (
    { type: 'default' }
  ))
  let dispatch = jest.fn()

  context('accenture', () => {
    const wrapper = shallow(
        <VariableGrid
         dispatch={dispatch}
         base={MediumPostGridDynamic}
         subdomain='accenture'
        />
    )

    it('should dispatch loadAccenturePages', () => {
      expect(mediumPosts.loadAccenturePages).toHaveBeenCalled()
    })
  })
  context('default', () => {
    const wrapper = shallow(
        <VariableGrid
         dispatch={dispatch}
         base={MediumPostGridDynamic}
         subdomain='www'
        />
    )

    it('should dispatch loadMediumPosts', () => {
      expect(mediumPosts.loadMediumPosts).toHaveBeenCalled()
    })
  })
})
