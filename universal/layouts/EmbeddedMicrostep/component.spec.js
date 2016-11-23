import React from 'react'
import { shallow } from 'enzyme'
import EmbeddedMicrostep from './component'
import Microstep from 'containers/Microstep'

const props = {
  params: {
    id: '1',
  },
  location: {
    query: 'test'
  }
}

describe('<EmbeddedMicrostep />', () => {
  const wrapper = shallow(<EmbeddedMicrostep {...props} />)

  it('should render a <Microstep />', () => {
    const element = wrapper.find('Connect(Microstep)')

    expect(element.length).toBe(1)
  })
})
