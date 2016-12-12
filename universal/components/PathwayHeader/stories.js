import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import PathwayHeader from './component'

const notes = 'This story demonstrates the props that can be passed to PathwayHeader'

const props = {
  title: 'Pathway Title',
  quote: 'this is where the quote goes',
  author: 'John Smith'
}

storiesOf('PathwayHeader', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <PathwayHeader
          title={text('Title', props.title)}
          quote={text('Quote', props.quote)}
          author={text('Author', props.author)}
        />
      </WithNotes>
    )
  })
