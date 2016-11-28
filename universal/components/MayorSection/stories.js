import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import MayorSection from './component'

const notes = 'This story demonstrates the props that can be passed to TeamSection'

const props = {
  title: 'MayorSection Title'
}

storiesOf('TeamSection', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <MayorSection
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
