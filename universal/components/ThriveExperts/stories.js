import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import ThriveExperts from './component'

const notes = 'This story demonstrates the props that can be passed to ThriveExperts'

const props = {
  title: 'ThriveExperts Title'
}

storiesOf('ThriveExperts', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <ThriveExperts
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
