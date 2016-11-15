import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import EmailCaptureMini from './component'

const notes = 'This story demonstrates the component EmailCaptureMini'

const defaultText = ['Sign up to receive the best tips and articles right in your email.']

const props = {
  title: 'Thrive with us today!',
  message: defaultText
}

storiesOf('EmailCaptureMini', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <EmailCaptureMini
          title={text('Email Capture Header', props.title)}
          message={text('Message', props.message)}
        />
      </WithNotes>
    )
  })
