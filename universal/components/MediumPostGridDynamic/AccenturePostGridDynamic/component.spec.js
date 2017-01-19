import React from 'react'
import AccenturePostGridDynamic from './component'
import { shallow } from 'enzyme'

describe('(Component) AccenturePostGridDynamic', () => {
  context('.renderHBMS', () => {
    const wrapper = shallow(
        <AccenturePostGridDynamic
         posts={{'body_story': 'test'}}
        />
    )

    it('should render a <MediumPostDynamic>', () => {
      expect(wrapper.find('MediumPostDynamic').length).toBe(1)
    })
  })
  context('.renderPost', () => {
    const wrapper = shallow(
        <AccenturePostGridDynamic
         posts={{'stories': [
           {'medium_uid': 1},
           {'medium_uid': 2},
           {'medium_uid': 3},
           {'medium_uid': 4},
         ]}}
        />
    )

    it('should render the correct amount of <MediumPostDynamic> elements', () => {
      expect(wrapper.find('MediumPostDynamic').length).toBe(4)
    })
  })
})
