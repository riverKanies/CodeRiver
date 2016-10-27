import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import MediumPostFilterOptions from './component'

const notes = 'This story demonstrates the props that can be passed to MediumPostFilterOptions'

const props = {
  title: 'MediumPostFilterOptions Title'
}

storiesOf('MediumPostFilterOptions', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <MediumPostFilterOptions
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
