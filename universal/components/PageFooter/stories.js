import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import PageFooter from './component'

const notes = 'This story demonstrates the props that can be passed to PageFooter'

const props = {
  title: 'PageFooter Title'
}

storiesOf('PageFooter', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <PageFooter
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })