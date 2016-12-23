import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import PressArticles from './component'

const notes = 'This story demonstrates the props that can be passed to PressArticles'

const props = {
  bgColor: [
    'default',
    'transparent',
    'lightGray',
    'purple',
    'blue'
  ],
  hasTitle: [
    'titleTrue',
    'titleFalse'
  ],
  title: 'Title'
}

storiesOf('PressArticles', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <PressArticles
          bgColor={select('Background Color', props.bgColor, props.bgColor[0])}
          hasTitle={select('Does This Need a Title?', props.hasTitle, props.hasTitle[0])}
          title={text('Title', props.title)}
        />
      </WithNotes>
    )
  })
