import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'
import TwoColQuote from './component'

const notes = 'This story demonstrates the props that can be passed to thw TwoColQuote component.'

const quote = [
  `Intention is one of the most powerful forces there is.
  What you mean when you do a thing will always determine the outcome.`
]

const quote2 = [
  `Young hearts be free tonight. Time is on your side,
  Don't let them put you down, don't let 'em push you around,
  don't let 'em ever change your point of view.`
]

const Props = {
  bgColor: [
    'default',
    'white',
    'gray',
    'purple',
    'pattern'
  ]
}

storiesOf('TwoColQuote', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <TwoColQuote
          bgColor={select('Background Color', Props.bgColor, 'default')}
          quote={text('Quote Text', quote)}
          quote2={text('Second Quote Text', quote2)}
          citation={text('Cite', 'Arianna Huffington')}
          citation2={text('Cite 2', 'Rod Stewart')}
          quoteURL={text('URL For Quote', Props.quoteUrl)}
          quoteURL2={text('URL For Second Quote', Props.quoteUrl2)}
        />
      </WithNotes>
    )
  })
