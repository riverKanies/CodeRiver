import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import FullWidthText from './component'

const notes = `This story demonstrates the props that can be passed to
FullWidthText. This component features a full viewport wide layout, with a
title, subtitle, text and an optional call to action. All of these pieces are
customizable by picking class names to change the background-color, button
color, etc.`

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const props = {
  sectionClass: [
    'default',
    'white',
    'blue',
    'gray'
  ],
  sectionWidth: [
    'defaultWidth',
    'fullWidth',
    'twoThirdsWidth',
    'halfWidth'
  ],
  textAlign: [
    'textLeft',
    'textCenter',
    'textRight'
  ],
  header: [
    'headerTrue',
    'headerFalse'
  ],
  title: 'h2 Title',
  sectionText: defaultText
}

storiesOf('FullWidthText', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FullWidthText
          sectionClass={select('Section Class', props.sectionClass, props.sectionClass[0])}
          sectionWidth={select('Section Content Width', props.sectionWidth, props.sectionWidth[0])}
          textAlign={select('Text Alignment', props.textAlign, props.textAlign[1])}
          header={select('Need a title?', props.header, props.header[0])}
          title={text('Section Title', props.title)}
          sectionText={text('Section Text', props.sectionText)}
        />
      </WithNotes>
    )
  })
