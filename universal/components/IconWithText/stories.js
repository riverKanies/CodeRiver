import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import IconWithText from './component'

const notes = 'This story demonstrates the props that can be passed to IconWithText'

const props = {
  title: 'IconWithText Title'
}

storiesOf('IconWithText', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <IconWithText
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
