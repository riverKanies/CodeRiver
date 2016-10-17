import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import PartnersSection from './component'

const notes = 'This story demonstrates the props that can be passed to PartnersSection'

const props = {
  title: 'PartnersSection Title'
}

storiesOf('PartnersSection', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <PartnersSection
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
