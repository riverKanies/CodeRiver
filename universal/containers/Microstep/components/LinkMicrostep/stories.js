import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs } from '@kadira/storybook-addon-knobs'

import LinkMicrostep from './component'

const notes = 'This story demonstrates the props that can be passed to LinkMicrostep'

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
