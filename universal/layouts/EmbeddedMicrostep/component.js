import React from 'react'

import 'styles/core'
import 'styles/fonts/icomoon'
import 'styles/vendor/normalize'

import Microstep from 'containers/Microstep'

const Props = {
  params: {
    id: String
  }
}

const EmbeddedMicrostep = ({ params } : Props) => {
  return <Microstep id={params.id} />
}

export default EmbeddedMicrostep

