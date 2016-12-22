import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, boolean } from '@kadira/storybook-addon-knobs'
import { Header } from './component'

const notes = 'This story demonstrates the props that can be passed to Header'

const Props = {
  bigHeader: [
    true,
    false
  ]
}

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <Header
          bigHeader={boolean('Do you need the big site header?', Props.bigHeader,
          Props.bigHeader[1])}
        />
      </WithNotes>
    )
  })
