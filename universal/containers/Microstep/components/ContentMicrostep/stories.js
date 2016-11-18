import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select } from '@kadira/storybook-addon-knobs'

import StoryContainer from 'components/StoryContainer'
import ContentMicrostep from './index'

const notes = 'This story demonstrates the props that can be passed to ContentMicrostep'

const markdown = `
##### Thrive Global Signature Protocol

# Come Into the Present Moment

(Preferably done with closed eyes, but can be done with eyes open)

----

1. Simply become aware of the rising and the falling of your breath (3 breaths)
2. Now allow yourself to receive the breath. Don't take the breath in, receive it.
(Realize the breath is a gift. We have done nothing to earn our breath).
So we receive it and then let go of it.
(The breath is the perfect metaphor for life: we have to let go - create space - in order to receive). (3 breaths)
3. We now feel the wave of the breath throughout our whole body.
When our breath moves, our whole body moves.
We can feel this as a wave. (3 breaths)
(We may need to adjust our body position to experience this -
in other words it is more difficult if we are slumping or have our legs crossed.)

----

(Can be done at anytime during the day as a mini-break).
`

const microstep = {
  description: markdown
}

const background = [
  'light',
  'dark'
]

storiesOf('ContentMicrostep', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <StoryContainer
          style={select('Background', background, 'dark')}
        >
          <ContentMicrostep microstep={microstep} />
        </StoryContainer>
      </WithNotes>
    )
  })
