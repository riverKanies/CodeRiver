import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import FourColImage from './component'

const notes = 'This story demonstrates the props that can be passed to FourColImage'

const props = {
  title: 'FourColImage Title'
}

storiesOf('FourColImage', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FourColImage
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
