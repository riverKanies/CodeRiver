import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'

import MissingMicrostep from './component'

const notes = 'This story demonstrates the props that can be passed to MissingMicrostep'

storiesOf('MissingMicrostep', module)
  .add('basic', () => {
    return (
      <WithNotes notes={notes}>
        <MissingMicrostep />
      </WithNotes>
    )
  })
