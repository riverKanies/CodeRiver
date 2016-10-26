import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'

import BasicMicrostep from './component'

const notes = 'This story demonstrates the props that can be passed to BasicMicrostep'

storiesOf('BasicMicrostep', module)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <BasicMicrostep />
      </WithNotes>
    )
  })
