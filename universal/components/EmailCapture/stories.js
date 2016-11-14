import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import EmailCapture from './component'

const notes = 'This story demonstrates the component EmailCapture'

const props = {
  title: 'Thrive with us today!'
}

storiesOf('EmailCapture', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <EmailCapture
          title={text('Section Title', props.title)}
        />
      </WithNotes>
    )
  })
