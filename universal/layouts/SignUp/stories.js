import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import SignUp from './component'

const notes = 'This story demonstrates the props that can be passed to SignUp'

const props = {
  title: 'SignUp Title'
}

storiesOf('SignUp', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <SignUp
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
