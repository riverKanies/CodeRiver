/* @flow */
import React from 'react'
import Profile from 'components/Profile'
import CTASection from 'components/CTASection'

const pulse = {
  alignment: 'center',
  colorScheme: 'purpleTealGradient',
  sectionText: [
    `Begin with the Thrive Pulse, our TK-question assessment that will help you
    take stockof your life and identify areas of improvement.`
  ],
  sectionWidth: 'twoThirdsWidth',
  title: 'What\'s My Thrive Pulse?',
  button: {
    buttonText: 'Get Your Thrive Pulse',
    linkTo: '/pulse',
    buttonStyle: 'white'
  }
}

export default function () {
  return (
    <div>
      <Profile />
      <CTASection {...pulse} />
    </div>
  )
}
