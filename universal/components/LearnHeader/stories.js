import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import LearnHeader from './component'

const notes = 'This story demonstrates the props that can be passed to LearnHeader'

const props = {
  title: 'LearnHeader Title'
}

storiesOf('LearnHeader', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <LearnHeader
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
