import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import FullWidthTwoColSpecial from './component'
import dummyImage from './assets/thriveScience.jpg'

const notes = `This story demonstrates the props that can be passed to
FullWidthTwoColSpecial.`

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const defaultButton = {
  buttonText: 'Read More',
  linkTo: 'javascript:void(0)',
  buttonStyle: 'violet'
}

const props = {
  sectionClass: ['default', 'lightGray', 'transparent'],
  title: 'I am a Title',
  label: 'Label',
  labelColor: ['defaultLabel', 'tealLabel', 'blueLabel', 'darkBlueLabel',
    'royalBlueLabel', 'blurpleLabel', 'violetLabel'],
  sectionText: defaultText,
  image: dummyImage
}

storiesOf('FullWidthTwoColSpecial', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <FullWidthTwoColSpecial
          sectionClass={select('Section Class', props.sectionClass, props.sectionClass[0])}
          title={text('Section Title', props.title)}
          labelColor={select('Label', props.labelColor, props.labelColor[0])}
          sectionText={text('Section Text', props.sectionText)}
          button={defaultButton}
        />
      </WithNotes>
    )
  })
