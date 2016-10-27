import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import QuoteSection from './component'

const notes = 'This story demonstrates the props that can be passed to ' +
'QuoteSection. This component was created to be used on the homepage for the ' +
'main quote from Arriana. It can be used elsewhere if desired. It is a ' +
'freestanding component, just pass some props to it and you are good to go.'

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
          citation={text('Citation Name', props.citation)}
          quoteImage={text('Quote Image', props.quoteImage)}
        />
      </WithNotes>
    )
  })
