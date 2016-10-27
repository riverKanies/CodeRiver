import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import TeamSection from './component'

const notes = 'This story demonstrates the props that can be passed to TeamSection'

const props = {
  title: 'TeamSection Title'
}

storiesOf('TeamSection', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <TeamSection
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
