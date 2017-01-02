import React from 'react'
import List from './component'
import { shallow } from 'enzyme'

describe('(Component) List', () => {
  it('should render ok without any props, defaults to default', () => {
    const subject = shallow(<List />)

    const target = subject.find('section')

    expect(target.length).toEqual(1)
  })

  context('hasTitle = true', () => {
    const props = {
      hasTitle: true
    }
    const subject = shallow(<List {...props} />)

    it('it renders a title', () => {
      const target = subject.find('h3')

      expect(target.length).toEqual(1)
    })
  })

  context('hasTitle = false', () => {
    const props = {
      hasTitle: false
    }
    const subject = shallow(<List {...props} />)

    it('it renders a title', () => {
      const target = subject.find('h3')

      expect(target.length).toEqual(0)
    })
  })

  context('bulletList = true', () => {
    const props = {
      bulletList: true
    }
    const subject = shallow(<List {...props} />)

    it('it renders an unordered list', () => {
      const target = subject.find('ul')

      expect(target.length).toEqual(1)
    })
  })

  context('bulletList = false', () => {
    const props = {
      bulletList: false
    }
    const subject = shallow(<List {...props} />)

    it('it renders an unordered list', () => {
      const target = subject.find('ol')

      expect(target.length).toEqual(1)
    })
  })

})
