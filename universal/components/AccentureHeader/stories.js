import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import AccentureHeader from './component'

const notes = 'This story demonstrates the props that can be passed to AccentureHeader'

const props = {
  title: 'AccentureHeader Title'
}

storiesOf('AccentureHeader', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <AccentureHeader
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
