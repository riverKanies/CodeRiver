import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select, boolean } from '@kadira/storybook-addon-knobs'

import ThreeColHeader from './component'

const notes = 'This story demonstrates the props that can be passed to ThreeColHeader'

const props = {
  bgColor: [
    'default',
    'transparent',
    'lightGray',
    'purple',
    'blue',
    'grayPattern'
  ],
  hasFooter: [
    true,
    false
  ]
}

storiesOf('ThreeColHeader', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <ThreeColHeader
          bgColor={select('Background Color', props.bgColor, props.bgColor[5])}
          hasFooter={boolean('Do you need additional footer text?', props.hasFooter, props.hasFooter[0])}
        />
      </WithNotes>
    )
  })
