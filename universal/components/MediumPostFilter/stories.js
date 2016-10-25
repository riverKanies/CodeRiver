import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import MediumPostFilter from './component'

const notes = 'This story demonstrates the props that can be passed to MediumPostFilter'

const props = {
  title: 'MediumPostFilter Title'
}

storiesOf('MediumPostFilter', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <MediumPostFilter
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
