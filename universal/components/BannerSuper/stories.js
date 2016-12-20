import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs } from '@kadira/storybook-addon-knobs'

import BannerSuper from './component'
// import dummyImage from 'assets/bg.jpg'

const notes = 'This story demonstrates the props that can be passed to BannerSuper.'

// const props = {
//   contentPosition: [
//     'defaultPosition',
//     'bottomLeft'
//   ],
//   title: 'Title',
//   bannerText: 'Hello, I am text!',
//   bannerImage: dummyImage,
//   bannerImageOverlay: [
//     'overlayTrue',
//     'overlayFalse'
//   ],
//   height: [
//     'fullHeight',
//     'halfHeight',
//     'quarterHeight',
//     'thirdHeight',
//     'twoThirdsHeight'
//   ]
// }

storiesOf('Banner', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <BannerSuper />
      </WithNotes>
    )
  })
