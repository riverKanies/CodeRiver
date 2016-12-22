import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select } from '@kadira/storybook-addon-knobs'
import { Header } from './component'

const notes = 'This story demonstrates the props that can be passed to Header'

const Props = {
  pathnames: [
    '/',
    '/home',
    '/about'
  ]
}

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <Header
          pathname={select('Select a URL to see the header change.',
          Props.pathnames,
          Props.pathnames[1])}
        />
      </WithNotes>
    )
  })
