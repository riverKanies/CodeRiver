import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import TwoColHeader from './component'

const notes = 'This story demonstrates the props that can be passed to TwoColHeader'

const props = {
  bgColor: [
    'default',
    'transparent',
    'lightGray',
    'purple',
    'blue'
  ],
  marginBottom: [
    'marginTrue',
    'marginFalse'
  ],
  hasTitle: [
    'titleTrue',
    'titleFalse'
  ],
  title: 'Title'
}

storiesOf('TwoColHeader', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <TwoColHeader
          bgColor={select('Background Color', props.bgColor, props.bgColor[0])}
          marginBottom={select('Need a bottom margin?', props.marginBottom, props.marginBottom[0])}
          hasTitle={select('Does This Need a Title', props.hasTitle, props.hasTitle[0])}
          title={text('Title', props.title)}
          // colTextOne={text('Column One Text', props.title)}
          // colTextTwo={text('Column Two Text', props.title)}
        />
      </WithNotes>
    )
  })
