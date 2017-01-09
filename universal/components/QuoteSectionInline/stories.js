import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import QuoteSectionInline from './component'

const notes = 'This story demonstrates the props that can be passed to thw QuoteSectionInline component.'

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
  textAlign: [
    'textLeft',
    'textCenter',
    'textRight'
  ],
  quote: defaultQuote,
  citation: 'Arianna Huffington'
}

storiesOf('QuoteSectionInline', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <QuoteSectionInline
          bgColor={select('Background Color', Props.bgColor, Props.bgColor[4])}
          textAlign={select('Quote text alignment:', Props.textAlign, Props.textAlign[0])}
          quote={text('Quote Text', Props.quote)}
          citation={text('Citation:', Props.citation)}
        />
      </WithNotes>
    )
  })
