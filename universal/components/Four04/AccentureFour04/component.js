/* @flow */
import React from 'react'
import Four04 from 'components/Four04/component'

const button = {
  buttonText: 'Return to Accenture'
}

function AccentureFour04 (props: any) {
  return (
    <Four04 {...props}
      quote='This page is missing'
      author='Accenture CEO'
      button={button}
    />
  )
}

export default AccentureFour04
