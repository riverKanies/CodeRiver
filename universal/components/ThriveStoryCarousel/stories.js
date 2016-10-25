import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import ThriveStoryCarousel from './component'

const notes = 'This story demonstrates the props that can be passed to ThriveStoryCarousel'

const props = {
  title: 'ThriveStoryCarousel Title'
}

storiesOf('ThriveStoryCarousel', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <ThriveStoryCarousel
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
