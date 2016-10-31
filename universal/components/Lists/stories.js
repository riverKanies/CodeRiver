import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import List from './component'

const notes = 'This component is for generating a <ul> list from a JSON File or API endpoint.'

const props = {
  sectionClass: 'string',
  title: 'string',
  listName: Array
}

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <List
          sectionClass={text('Section Class', props.sectionClass)}
          title={text('List Header title', props.title)}
          items={text('Enter The Name Of The List', props.items)}
        />
      </WithNotes>
    )
  })
