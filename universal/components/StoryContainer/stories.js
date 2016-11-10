import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import StoryContainer from './component'

const notes = 'This story demonstrates the props that can be passed to StoryContainer'

const props = {
  title: 'StoryContainer Title'
}

storiesOf('StoryContainer', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <StoryContainer
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
