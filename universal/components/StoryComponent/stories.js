import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import StoryComponent from './component'

const notes = 'This story demonstrates the props that can be passed to StoryComponent'

const props = {
  title: 'StoryComponent Title'
}

storiesOf('StoryComponent', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <StoryComponent
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
