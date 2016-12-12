import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import JourneyHeader from './component'

const notes = 'Make sure to include a quote and an author.'

const props = {
  title: 'Journey Title',
  quote: 'this is where the quote goes',
  author: 'John Smith'
}

storiesOf('JourneyHeader', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <JourneyHeader
          title={text('Title', props.title)}
          quote={text('Quote', props.quote)}
          author={text('Author', props.author)}
        />
      </WithNotes>
    )
  })
