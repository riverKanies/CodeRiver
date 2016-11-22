import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import Pathways from './component'

const notes = 'This story demonstrates the props that can be passed to Pathways'

const props = {
  title: 'Pathways Title'
}

storiesOf('Pathways', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <Pathways
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
