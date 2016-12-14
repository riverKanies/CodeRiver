import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import { WithProvider } from 'lib/testHelpers'

import Footer from './component'

const notes = 'This story demonstrates the props that can be passed to Footer'

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <WithProvider>
          <Footer />
        </WithProvider>
      </WithNotes>
    )
  })
