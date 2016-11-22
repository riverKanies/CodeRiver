import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, text, select } from '@kadira/storybook-addon-knobs'

import CTASection from './component'

const notes = 'This story demonstrates the props that can be passed to CTASection'

const defaultText = [`I am the CTA Section. Morbi leo risus, porta ac consectetur ac,
vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.
Etiam porta sem malesuada magna mollis euismod. Cras
mattis consectetur purus sit amet fermentum.`]

const props = {
  colorScheme: [
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
  alignment: [
    'defaultLeft',
    'center'
  ],
  title: 'Section Title',
  sectionText: defaultText
}

storiesOf('CTASection', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <CTASection
          title={text('Title', props.title)}
          alignment={select('Alignment', props.alignment, props.alignment[0])}
          colorScheme={select('Section Class', props.colorScheme, props.colorScheme[0])}
          sectionWidth={select('Section Content Width', props.sectionWidth, props.sectionWidth[0])}
          sectionText={text('Section Text', props.sectionText)}
        />
      </WithNotes>
    )
  })
