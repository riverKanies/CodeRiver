import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import PathwayCardLinked from './component'

const notes = 'This story demonstrates the props that can be passed to PathwayCardLinked'

const props = {
  title: 'Pathway Card Linked'
}

storiesOf('PathwayCardLinked', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <PathwayCardLinked
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
