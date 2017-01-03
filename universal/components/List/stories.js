import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select, boolean } from '@kadira/storybook-addon-knobs'

import List from './component'

const notes = 'This story demonstrates the props that can be passed to the List component.'

const props = {
  hasTitle: [
    true,
    false
  ],
  title: 'Section Title',
  bulletList: [
    true,
    false
  ],
  itemWidth: [
    'full',
    'half',
    'quarter',
    'third'
  ]
}

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <List
          hasTitle={boolean('Do you need a title for this list?', props.hasTitle, props.hasTitle[0])}
          title={text('Title of list:', props.title)}
          bulletList={boolean('Is this a bulleted list?', props.bulletList, props.bulletList[0])}
          itemWidth={select('how wide do you want each list item?', props.itemWidth)}
        />
      </WithNotes>
    )
  })
