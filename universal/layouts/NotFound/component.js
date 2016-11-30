import React from 'react'

type Props = {
  location: {
    query: string
  }
}

class NotFoundLayout extends React.Component {
  props: Props

  componentWillMount () {
    const { location } = this.props
    if (!location.pathname.match(/404/)) {
      window.location = '/404'
    }
  }

  render () {
    return (
      <h1 id='pageNotFound'>Page Not Found</h1>
    )
  }
}

export default NotFoundLayout
