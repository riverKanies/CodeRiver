import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import HalfTextOverlay from './component'

const notes = 'This story demonstrates the props that can be passed to HalfTextOverlay'

// const props = {
//   title: 'HalfTextOverlay Title'
// }

storiesOf('HalfTextOverlay', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <HalfTextOverlay />
      </WithNotes>
    )
  })
