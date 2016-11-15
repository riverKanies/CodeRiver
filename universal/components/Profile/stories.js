import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import Profile from './component'

const notes = 'This story demonstrates the props that can be passed to Profile'

const props = {
  title: 'Profile Title'
}

storiesOf('Profile', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <Profile
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
