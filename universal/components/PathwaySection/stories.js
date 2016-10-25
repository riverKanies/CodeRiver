import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import PathwaySection from './component'

const notes = 'This story demonstrates the props that can be passed to PathwaySection'

const props = {
  title: 'PathwaySection Title'
}

storiesOf('PathwaySection', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <PathwaySection
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
