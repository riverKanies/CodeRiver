import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import PathwayCard from './component'

const notes = 'This story demonstrates the props that can be passed to PathwayCard'

const props = {
  title: 'PathwayCard Title'
}

storiesOf('PathwayCard', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <PathwayCard
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
