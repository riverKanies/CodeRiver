import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import Sidebar from './component'

const notes = 'Description'

const props = {
  sectionClass: 'string',
  title: 'string',
  listName: Array
}

storiesOf('Sidebar', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <Sidebar
          sectionClass={text('Section Class', props.sectionClass)}
        />
      </WithNotes>
    )
  })
