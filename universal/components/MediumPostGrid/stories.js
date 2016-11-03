import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import MediumPostGrid from './component'

const notes = 'MediumPostGrid, a grid of Medium posts.'

const props = {
  title: 'MediumPostGrid'
}

storiesOf('MediumPostGrid', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <MediumPostGrid
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
