import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select } from '@kadira/storybook-addon-knobs'

import FourColImage from './component'

const notes = 'This story demonstrates the props that can be passed to FourColImage'

const props = {
  bgColor: [
    'default',
    'white',
    'blue',
    'gray',
    'fade'
  ],
  gutters: [
    'guttersTrue',
    'guttersFalse'
  ]
}

storiesOf('FourColImage', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FourColImage
          bgColor={select('Section BG Color', props.bgColor, props.bgColor[0])}
          gutters={select('Want gutters between images?', props.gutters, props.gutters[0])}
        />
      </WithNotes>
    )
  })
