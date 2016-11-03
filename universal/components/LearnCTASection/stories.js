import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import LearnCTASection from './component'

const notes = 'This story demonstrates the props that can be passed to LearnCTASection'

const props = {
  title: 'LearnCTASection Title'
}

storiesOf('LearnCTASection', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <LearnCTASection
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
