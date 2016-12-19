import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select, boolean } from '@kadira/storybook-addon-knobs'
import dummyImage from './assets/quote_imagePlaceholder.png'

import QuoteSection from './component'

const notes = 'This story demonstrates the props that can be passed to thw QuoteSection component.'

const defaultQuote = [
  `Intention is one of the most powerful forces there is.
  What you mean when you do a thing will always determine the outcome.`
]

const Props = {
  bgColor: [
    'default',
    'white',
    'gray',
    'purple',
    'pattern'
  ],
  isLink: [
    true,
    false
  ],
  quoteUrl: 'string'
}

storiesOf('QuoteSection', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <QuoteSection
          bgColor={select('Background Color', Props.bgColor, 'default')}
          quote={text('Quote Text', defaultQuote)}
          citation={text('Cite', 'Arianna Huffington')}
          quoteImage={text('Quote Image', dummyImage)}
          isLink={boolean('Does this need to link out?', false)}
          quoteURL={text('URL For Quote', Props.quoteUrl)}
        />
      </WithNotes>
    )
  })
