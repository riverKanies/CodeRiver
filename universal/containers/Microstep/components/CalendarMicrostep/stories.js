import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select } from '@kadira/storybook-addon-knobs'

import StoryContainer from 'components/StoryContainer'
import CalendarMicrostep from './index'

const notes = 'This story demonstrates the props that can be passed to CalendarMicrostep'

const markdown = `
Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.
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
