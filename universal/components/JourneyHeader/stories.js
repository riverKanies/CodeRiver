import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import JourneyHeader from './component'

const notes = 'This story demonstrates the props that can be passed to JourneyHeader'

const props = {
  bgColor: [
    'default',
    'blue',
    'teal',
    'blurple'
  ],
  title: 'JourneyHeader Title'
}

storiesOf('JourneyHeader', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <JourneyHeader
          bgColor={select('Background Color', props.bgColor, props.bgColor[0])}
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
