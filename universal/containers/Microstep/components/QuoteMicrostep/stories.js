import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select } from '@kadira/storybook-addon-knobs'

import StoryContainer from 'components/StoryContainer'
import QuoteMicrostep from './index'

const notes = 'This story demonstrates the props that can be passed to QuoteMicrostep'

const markdown = `
# Quote Microstep

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**. Itemized lists
look like:

  * this one
  * that one
  * the other one
`

const microstep = {
  description: markdown
}

const background = [
  'light',
  'dark'
]

storiesOf('QuoteMicrostep', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <StoryContainer
          style={select('Background', background, 'dark')}
        >
          <QuoteMicrostep microstep={microstep} />
        </StoryContainer>
      </WithNotes>
    )
  })
