import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'

import OneColTextWithHeader from './component'

const notes = 'This story demonstrates the props that can be passed to the OneColTextWithHeader component.'

const Props = {
  title: 'Title',
  hasSubtitle: [
    true,
    false
  ],
  subTitle: 'Subtitle',
  largeCopyContent: [
    true,
    false
  ]
}

storiesOf('OneColTextWithHeader', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <OneColTextWithHeader
          title={text('Title Text', Props.title)}
          hasSubtitle={boolean('Do you need a subtitle?', true)}
          subTitle={text('Subtitle Text', Props.subtitle)}
          largeCopyContent={boolean('Do you want large copy text?', true)}
        />
      </WithNotes>
    )
  })
