import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select, text } from '@kadira/storybook-addon-knobs'

import ThreeColHeader from './component'

const notes = `This story demonstrates the props that can be passed to ThreeColHeader.
This component also has the ability to handle inline links`

const props = {
  bgColor: [
    'default',
    'transparent',
    'lightGray',
    'purple',
    'blue',
    'grayPattern'
  ],
  footerText: [
    'Hi this is the footer text, if you delete me, I will go away'
  ],
  footerTextQuote: [
    'quoteTrue',
    'quoteFalse'
  ]
}

storiesOf('ThreeColHeader', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <ThreeColHeader
          bgColor={select('Background Color', props.bgColor, props.bgColor[5])}
          footerTextQuote={select('Is the footer text a quote?', props.footerTextQuote, props.footerTextQuote[1])}
          footerText={text('Footer Text', props.footerText)}
        />
      </WithNotes>
    )
  })
