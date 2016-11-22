import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import TwoColText from './component'

const notes = 'This story demonstrates the props that can be passed to TwoColText'

const props = {
  bgColor: 'default' | 'transparent' | 'lightGray' | 'purple' | 'blue',
  hasTitle: 'titleTrue' | 'titleFalse',
  title: 'Title',
  colTextOne: 'Hey, I am column one\'s text!',
  colTextTwo: 'Hey, I am column two\'s text!'
}

storiesOf('TwoColText', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <TwoColText
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
