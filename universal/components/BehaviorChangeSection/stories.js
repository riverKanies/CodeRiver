import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import BehaviorChangeSection from './component'

const notes = 'This story demonstrates the props that can be passed to BehaviorChangeSection'

const props = {
  title: 'BehaviorChangeSection Title'
}

storiesOf('BehaviorChangeSection', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <BehaviorChangeSection
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
