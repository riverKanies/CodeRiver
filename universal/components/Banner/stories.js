import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import FullscreenBanner from './component'
import dummyImage from 'assets/bg.jpg'

const notes = 'This story demonstrates the props that can be passed to FullscreenBanner.'

const props = {
  title: 'Title',
  subTitle: 'Subtitle',
  bannerText: 'Hello, I am text!',
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
          bannerText={text('Banner Content Text', props.bannerText)}
          bannerImage={text('Banner Image URL', props.bannerImage)}
        />
      </WithNotes>
    )
  })
