import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'

import LoadingMicrostep from './component'

const notes = 'This story demonstrates the props that can be passed to LoadingMicrostep'

storiesOf('LoadingMicrostep', module)
  .add('basic', () => {
    return (
      <WithNotes notes={notes}>
        <LoadingMicrostep />
      </WithNotes>
    )
  })
