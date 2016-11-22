import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import JourneyCard from './component'

const notes = 'This story demonstrates the props that can be passed to JourneyCard'

const props = {
  title: 'JourneyCard Title'
}

storiesOf('JourneyCard', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <JourneyCard
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
