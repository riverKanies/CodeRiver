import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import QuoteSection from './component'

const notes = 'This story demonstrates the props that can be passed to QuoteSection'

const props = {
  title: 'QuoteSection'
}

storiesOf('QuoteSection', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <QuoteSection
          quote={text('Quote', props.quote)}
          citation={text('Citation', props.citation)}
        />
      </WithNotes>
    )
  })
