import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WithNotes } from '@kadira/storybook-addon-notes'
import { withKnobs } from '@kadira/storybook-addon-knobs'

import logo_one from './assets/logo_one.jpg'
import logo_two from './assets/logo_two.jpg'
import logo_three from './assets/logo_three.jpg'
import logo_four from './assets/logo_four.jpg'
import logo_five from './assets/logo_five.jpg'

import BrandRow from './component'

const defaultLogos = [
  { logoImage: logo_one, link: 'http://www.google.com' },
  { logoImage: logo_two, link: 'http://www.google.com' },
  { logoImage: logo_three, link: 'http://www.google.com' },
  { logoImage: logo_four, link: 'http://www.google.com' },
  { logoImage: logo_five, link: 'http://www.google.com' }
]
const notes = 'This story demonstrates the props that can be passed to BrandRow'

storiesOf('BrandRow', module)
  .addDecorator(withKnobs)
  .add('with props', () => {
    return (
      <WithNotes notes={notes}>
        <BrandRow logos={defaultLogos} />
      </WithNotes>
    )
  })
