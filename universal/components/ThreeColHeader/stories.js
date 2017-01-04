import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs } from '@kadira/storybook-addon-knobs'

import ThreeColHeader from './component'

const notes = 'This story demonstrates the props that can be passed to ThreeColHeader'

storiesOf('ThreeColHeader', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <ThreeColHeader />
      </WithNotes>
    )
  })
