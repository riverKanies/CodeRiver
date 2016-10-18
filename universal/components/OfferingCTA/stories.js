import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import OfferingCTA from './component'

const notes = 'This story demonstrates the props that can be passed to OfferingCTA'

const props = {
  title: 'OfferingCTA Title'
}

storiesOf('OfferingCTA', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <OfferingCTA
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
