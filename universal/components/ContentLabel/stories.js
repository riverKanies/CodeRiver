import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import ContentLabel from './component'

const notes = `This story demonstrates the props that can be passed to
ContentLabel.`

const props = {
  label: 'Label Name',
  labelColor: ['defaultLabel', 'tealLabel', 'blueLabel', 'darkBlueLabel',
    'royalBlueLabel', 'blurpleLabel', 'violetLabel']
}

storiesOf('ContentLabel', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <ContentLabel
          label={text('Label Text', props.label)}
          labelColor={select('Label', props.labelColor, props.labelColor[0])}
        />
      </WithNotes>
    )
  })
