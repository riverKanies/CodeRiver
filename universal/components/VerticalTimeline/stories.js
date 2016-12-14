import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs } from '@kadira/storybook-addon-knobs'

import VerticalTimeline from './component'

const notes = `
  This story demonstrates the props that can be passed to
  VerticalTimeline. This component is the container for the VerticalTimelineItem
  component, which you can specify what side of the timeline, and what content goes in each.
`

storiesOf('VerticalTimeline', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <VerticalTimeline />
      </WithNotes>
    )
  })
