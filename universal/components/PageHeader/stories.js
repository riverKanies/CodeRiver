import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import PageHeader from './component'

const notes = 'This story demonstrates the props that can be passed to PageHeader'

const props = {
  title: 'PageHeader Title'
}

storiesOf('PageHeader', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <PageHeader
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
