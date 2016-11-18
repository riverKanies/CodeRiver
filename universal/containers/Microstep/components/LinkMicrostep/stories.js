import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs } from '@kadira/storybook-addon-knobs'

import LinkMicrostep from './component'

const notes = 'This story demonstrates the props that can be passed to LinkMicrostep'

const markdown = `
##### Joy

Realize that everything can be used for your learning, upliftment, and growth.
What challenge or adversity can you use today for your upliftment and growth?
How can you use it to your advantage? How can you turn this stumbling block into a stepping stone.
`

const props = {
  microstep: {
    description: markdown,
    cta_link: 'https://placekitten.com/',
    cta_text: 'cats!'
  }
}

storiesOf('LinkMicrostep', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <LinkMicrostep {...props} />
      </WithNotes>
    )
  })
