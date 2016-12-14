import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'
import iconPlaceholder from './assets/rocket.png'

import IconWithText from './component'

const notes = 'This story demonstrates the props that can be passed to IconWithText'

const props = {
  description: 'This is the description'
}

storiesOf('IconWithText', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <IconWithText
          description={text('Description', props.description)}
          icon={iconPlaceholder}
        />
      </WithNotes>
    )
  })
