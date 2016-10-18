import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import HeroHeader from './component'

const notes = 'This story demonstrates the props that can be passed to HeroHeader'

const props = {
  title: 'HeroHeader Title'
}

storiesOf('HeroHeader', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <HeroHeader
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
