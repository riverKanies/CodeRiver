import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text } from '@kadira/storybook-addon-knobs'

import FullWidthTwoColSpecial from './component'

const notes = `This story demonstrates the props that can be passed to
FullWidthTwoColSpecial. This component features a full viewport wide layout, with a
title, subtitle, text and an optional call to action. All of these pieces are
customizable by picking class names to change the background-color, button
color, etc.`

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const props = {
  sectionClass: 'default',
  title: 'h2 Title',
  subTitle: 'h3 Subtitle',
  sectionText: defaultText
}

storiesOf('FullWidthTwoColSpecial', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FullWidthTwoColSpecial
          sectionClass={text('Section Class', props.sectionClass)}
          title={text('Section Title', props.title)}
          subTitle={text('Section Subtitle', props.subTitle)}
          sectionText={text('Section Text', props.sectionText)}
        />
      </WithNotes>
    )
  })
