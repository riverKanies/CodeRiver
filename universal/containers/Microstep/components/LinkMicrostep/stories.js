import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select } from '@kadira/storybook-addon-knobs'

import StoryContainer from 'components/StoryContainer'
import LinkMicrostep from './component'

const notes = 'This story demonstrates the props that can be passed to LinkMicrostep'

const markdown = `
##### Joy

# Come Into the Present Moment

Experience yourself feeling lighter and more connected to your center in a place
of openness and receptivity: in the eye of the hurricane, where no matter what
storm is around us, there is stillness, quiet and peace. Anytime you find yourself
caught up in the storm you can return to the "eye" through this simple forgiveness process.
`

const props = {
  microstep: {
    description: markdown,
    cta_link: './assets/_quote_imagePlaceholder.png',
    cta_text: 'CTA Link'
  }
}

const background = [
  'light',
  'dark'
]

storiesOf('LinkMicrostep', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <StoryContainer
          style={select('Background', background, 'dark')}
        >
          <LinkMicrostep {...props} />
        </StoryContainer>
      </WithNotes>
    )
  })
