import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import TextBanner from './component'

const notes = 'This story demonstrates the props that can be passed to TextBanner'

const props = {
  bgColor: [
    'default',
    'transparent',
    'lightGray',
    'purple',
    'blue'
  ],
  hasTitle: [
    'titleTrue',
    'titleFalse'
  ],
  title: 'Title'
}

storiesOf('TextBanner', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <TextBanner
          bgColor={select('Background Color', props.bgColor, props.bgColor[0])}
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
