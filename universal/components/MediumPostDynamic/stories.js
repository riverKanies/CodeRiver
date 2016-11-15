import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import MediumPostDynamic from './component'

const notes = 'This story demonstrates the props that can be passed to MediumPostDynamic'

const cardType = [
  'half',
  'quarterWhite',
  'quarterBlue'
]
const hasImage = [
  'imageTrue',
  'imageFalse'
]
const hasSynopsis = [
  'synopsisTrue',
  'synopsisFalse'
]

storiesOf('MediumPostDynamic', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <MediumPostDynamic
          postTitle={text('Post Title', 'Arianna Huffington’s Sleep Revolution Starts at Home')}
          cardType={select('Card Type', cardType, 'half')}
          hasImage={select('Does this card have an image?', hasImage, 'imageTrue')}
          hasSynopsis={select('Does this card have an post synopsis?', hasSynopsis, 'synopsisTrue')}
        />
      </WithNotes>
    )
  })
