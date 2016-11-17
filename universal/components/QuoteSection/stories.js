import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import QuoteSection from './component'

const notes = 'This story demonstrates the props that can be passed to thw QuoteSection component.'

storiesOf('QuoteSection', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <QuoteSection />
      </WithNotes>
    )
  })
