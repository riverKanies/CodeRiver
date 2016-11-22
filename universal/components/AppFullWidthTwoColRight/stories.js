import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import AppFullWidthTwoColRight from './component'
import dummyImage from './assets/appPlaceholder.png'

const notes = `This story demonstrates the props that can be passed to
AppFullWidthTwoColRight.`

const defaultText = [`Morbi leo risus, porta ac consectetur ac, vestibulum at
eros. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const defaultButton = {
  buttonText: 'Download',
  linkTo: 'javascript:void(0)',
  buttonStyle: 'teal'
}

const props = {
  sectionClass: ['default', 'lightGray', 'transparent'],
  title: 'App Name',
  sectionText: defaultText,
  image: dummyImage
}

storiesOf('AppFullWidthTwoColRight', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <AppFullWidthTwoColRight
          sectionClass={select('Section Class', props.sectionClass, props.sectionClass[0])}
          title={text('Section Title', props.title)}
          sectionText={text('Section Text', props.sectionText)}
          button={defaultButton}
        />
      </WithNotes>
    )
  })
