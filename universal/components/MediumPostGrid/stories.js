import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import MediumPostGrid from './component'

const notes = 'This story demonstrates the props that can be passed to MediumPostGrid'

const props = {
  title: 'MediumPostGrid Title'
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
