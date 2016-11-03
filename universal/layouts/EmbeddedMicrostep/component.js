/* @flow */
import React from 'react'

import 'styles/vendor/normalize'
import 'styles/core'
import 'styles/fonts/webfonts/webfonts'
import 'styles/typography'

import Microstep from 'containers/Microstep'

type Props = {
  params: {
    id: string,
  },
  location: {
    query: string
  }
}

const EmbeddedMicrostep = ({ params: { id }, location: { query } } : Props) => {
  const params = {
    id,
    stepType: query.type || 'informational'
  }
  return <Microstep {...params} />
}

export default EmbeddedMicrostep
