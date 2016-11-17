import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import FullscreenBanner from './component'

const notes = 'This story demonstrates the props that can be passed to FullscreenBanner'

import dummyImage from 'assets/bg.jpg'

const props = {
  title: 'Banner Header Text',
  subTitle: 'Banner Sub Title',
  bannerImage: dummyImage,
  height: [
    'fullHeight',
    'halfHeight',
    'quarterHeight',
    'thirdHeight',
    'twoThirdsHeight'
  ]
}

storiesOf('Banner', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FullscreenBanner
          height={select('Banner Height', props.height, props.height[0])}
          title={text('Banner Title', props.title)}
          subTitle={text('Banner Sub Title', props.subTitle)}
          bannerText={text('Banner Text', props.bannerText)}
          bannerImage={text('Banner Image URL', props.bannerImage)}
        />
      </WithNotes>
    )
  })
