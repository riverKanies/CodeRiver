import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import FeaturedStory from './component'

const notes = 'This story demonstrates the props that can be passed to FeaturedStory'

const props = {
  bgColor: [
    'default',
    'blue',
    'teal',
    'blurple'
  ],
  title: 'FeaturedStory Title'
}

storiesOf('FeaturedStory', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FeaturedStory
          bgColor={select('Background Color', props.bgColor, props.bgColor[2])}
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
