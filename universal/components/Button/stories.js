import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs, select, text } from '@kadira/storybook-addon-knobs'
import Button from './component'
import StoryContainer from 'components/StoryContainer'

const notes = 'This story demonstrates the props that can be passed to the Button Component'

const label = 'Button Label'

const styles = [
  'violet',
  'violet-medium',
  'violet-large',
  'white',
  'white-medium',
  'white-large',
  'teal',
  'teal-medium',
  'teal-large'
]

const background = [
  'light',
  'dark'
]

const props = {
  disabled: false,
  linkTo: '/',
  buttonStyle: 'violet-medium',
  buttonText: 'Button Story'
}
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <StoryContainer
          style={select('Background', background, 'light')}
        >
          <Button
            {...props}
            buttonStyle={select('button style', styles, 'violet-medium')}
            buttonText={text('button text', label)}
          />
        </StoryContainer>
      </WithNotes>
    )
  })
