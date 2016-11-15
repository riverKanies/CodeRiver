import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import MediumPostGridDynamic from './component'

const notes = 'MediumPostGridDynamic, a grid of Medium posts.'

const props = {
  title: 'MediumPostGridDynamic'
}

storiesOf('MediumPostGridDynamic', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <MediumPostGridDynamic
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
