import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import Offerings from './component'

const notes = 'This story demonstrates the props that can be passed to Offerings'

const props = {
  title: 'Offerings Title'
}

storiesOf('Offerings', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <Offerings
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
