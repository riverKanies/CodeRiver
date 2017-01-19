import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import AccentureFour04 from './component'

const notes = 'This story demonstrates the props that can be passed to Four04'

const props = {
  bgColor: [
    'default',
    'blue',
    'teal',
    'blurple'
  ],
  title: 'Four04 Title'
}

storiesOf('AccentureFour04', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <AccentureFour04
          bgColor={select('Background Color', props.bgColor, props.bgColor[0])}
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
