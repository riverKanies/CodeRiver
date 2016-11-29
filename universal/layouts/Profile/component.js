/* @flow */
import React from 'react'
import Profile from 'components/Profile'
import FeaturedStory from 'components/FeaturedStory'

const pulse = {
  hasAuthor: 'authorFalse',
  details: `Begin with the Thrive Pulse, our TK-question assessment that will
    help you take stockof your life and identify areas of improvement.`,
  title: 'What\'s My Thrive Pulse',
  externalLink: {
    linkTo: '/pulse'
  }
}

export default function () {
  return (
    <div>
      <Profile />
      <FeaturedStory {...pulse} />
    </div>
  )
}
