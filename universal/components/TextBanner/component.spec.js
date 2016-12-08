import React from 'react'
import { shallow } from 'enzyme'

import TextBanner from './component'

describe('(Component) TwoColText', () => {
  it('renders fine with nothin!', () => {
    const subject = shallow(<TextBanner />)
    const target = subject.find('#textBannerTitle')

    expect(target.length).toBe(1)
    expect(target.text()).toEqual('Title')
  })

  it('accepts a string as subTitle', () => {
    const subject = shallow(<TextBanner subTitle='this is the subtitle'/>)
    const target = subject.find('.stSelect')

    expect(target.length).toBe(1)
    expect(target.text()).toEqual('this is the subtitle')
  })

  it('accepts an array for subtitles', () => {
    const subTitles = ['a', 'b', 'c']
    const subject = shallow(<TextBanner subTitle={subTitles}/>)
    const target = subject.find('.stSelect')

    expect(target.length).toBe(3)
    target.forEach(function(elem, i) {
      expect(elem.text()).toEqual(subTitles[i])
    })
  })
})
