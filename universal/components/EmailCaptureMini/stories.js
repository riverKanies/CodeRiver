import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import EmailCaptureMini from './component'

const notes = 'This story demonstrates the component EmailCaptureMini'

// const props = {
//   title: 'Thrive with us today!'
// }

storiesOf('EmailCaptureMini', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <EmailCaptureMini />
      </WithNotes>
    )
  })
