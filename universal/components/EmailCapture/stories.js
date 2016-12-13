import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
import { WithProvider } from 'lib/testHelpers'

import EmailCapture from './container'

const notes = 'This story demonstrates the props that can be passed to EmailCapture'

const props = {
  title: 'EmailCapture Title'
}

storiesOf('EmailCapture', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <WithProvider>
          <EmailCapture
            title={text('Title', props.title)}
          />
        </WithProvider>
      </WithNotes>
    )
  })
