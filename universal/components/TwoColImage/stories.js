import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import TwoColImage from './component'

const notes = 'This story demonstrates the props that can be passed to TwoColImage'

const props = {
  bgColor: [
    'default',
    'transparent',
    'lightGray',
    'purple',
    'blue'
  ],
  hasTitle: [
    'titleTrue',
    'titleFalse'
  ],
  title: 'Title'
}

storiesOf('TwoColImage', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <TwoColImage
          bgColor={select('Background Color', props.bgColor, props.bgColor[0])}
          hasTitle={select('Does This Need a Title?', props.hasTitle, props.hasTitle[0])}
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
