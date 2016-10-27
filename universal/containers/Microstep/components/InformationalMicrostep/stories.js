import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import InformationalMicrostep from './component'

const notes = 'This story demonstrates the props that can be passed to InformationalMicrostep'

const props = {
  title: 'InformationalMicrostep Title'
}

storiesOf('InformationalMicrostep', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <InformationalMicrostep
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
