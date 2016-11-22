import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select } from '@kadira/storybook-addon-knobs'

import StoryContainer from 'components/StoryContainer'
import CalendarMicrostep from './index'

const notes = 'This story demonstrates the props that can be passed to CalendarMicrostep'

const markdown = `
##### We Recommend

# Start Getting The Sleep You Need

When you’re ready, add another 5 minutes until you are consistently going to bed 30 minutes earlier.
Observe what a difference this will make to the quality of your day and the quality of your life.
The reward will keep you coming back for more until you get all the sleep you need.
`

const microstep = {
  title: 'CalendarMicrostep Title',
  description: markdown
}

const background = [
  'light',
  'dark'
]

storiesOf('CalendarMicrostep', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <StoryContainer
          style={select('Background', background, 'dark')}
        >
          <CalendarMicrostep microstep={microstep} />
        </StoryContainer>
      </WithNotes>
    )
  })
