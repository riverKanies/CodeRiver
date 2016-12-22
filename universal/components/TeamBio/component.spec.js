import React from 'react'
import TeamBio from './component'
import { shallow } from 'enzyme'
import imagePlaceholder from './assets/team-placeholder.jpg'

describe('(Component) TeamBio', () => {
  context('using default props', () => {
    const subject = shallow(<TeamBio />)

    it('should exist', () => {
      const target = subject.find('h3')

      expect(target.length).toEqual(1)
    })
  })

  context('when passing in our own properties', () => {
    const teamBioProps = {
      title: 'Test title',
      name: 'Test name',
      image: imagePlaceholder
    }

    const subject = shallow(<TeamBio {...teamBioProps} />)

    it('renders component with title', () => {
      const target = subject.find('h4')

      expect(target.text()).toEqual(teamBioProps.title)
    })

    it('renders component with name', () => {
      const target = subject.find('h3')

      expect(target.text()).toEqual(teamBioProps.name)
    })
  })
})
