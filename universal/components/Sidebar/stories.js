import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import Sidebar from './component'

const notes = `This component is for a sidebar with a list inside of it. It is
quite nifty. You can either specify the list name from a JSON file to have it
autofill the list, or pull the data in via an external source.`

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
          title={text('Sidebar Header title', props.title)}
          items={text('Enter The Name Of The List', props.items)}
        />
      </WithNotes>
    )
  })
