import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import TeamBio from './component'

const notes = 'This story demonstrates the props that can be passed to TeamBio'

const props = {
  title: 'TeamBio Title'
}

storiesOf('TeamBio', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <TeamBio
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
