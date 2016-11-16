import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import Login from './component'

const notes = 'This story demonstrates the props that can be passed to Login'

const props = {
  title: 'Login Title'
}

storiesOf('Login', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <Login
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
