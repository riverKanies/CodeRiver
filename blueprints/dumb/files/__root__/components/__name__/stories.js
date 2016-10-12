import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import <%= pascalEntityName %> from './component'

const notes = 'This story demonstrates the props that can be passed to <%= pascalEntityName %>'

const props = {
  title: '<%= pascalEntityName %> Title'
}

storiesOf('<%= pascalEntityName %>', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <<%= pascalEntityName %>
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
