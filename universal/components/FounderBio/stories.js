import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import FounderBio from './component'

const notes = 'This story demonstrates the props that can be passed to FounderBio'

const props = {
  title: 'FounderBio Title'
}

storiesOf('FounderBio', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FounderBio
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
