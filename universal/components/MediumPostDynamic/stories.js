import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import MediumPostDynamic from './component'

const notes = 'This story demonstrates the props that can be passed to MediumPostDynamic'

const cardType = [
  'half',
  'halfImage',
  'quarterWhite',
  'quarterBlue'
]

const props = {
  hasImage: 'imageTrue' | 'imageFalse',
  hasSynopsis: 'synopsisTrue' | 'synopsisFalse'
}

storiesOf('MediumPostDynamic', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <MediumPostDynamic
          cardType={select('Card Type', cardType, 'halfImage')}
        />
      </WithNotes>
    )
  })
