/* @flow */
import React from 'react'

class TempHomePage extends React.Component {
  componentWillMount () {
    document.body.style.height = '100%'
    document.body.style.overflow = 'hidden'
    document.documentElement.style.height = '100%'
  }

  render () {
    return (
      <iframe
        src='/landingpage.html'
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    )
  }
}

export default TempHomePage
