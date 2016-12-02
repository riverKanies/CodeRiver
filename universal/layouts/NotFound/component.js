import React from 'react'
import Four04 from 'components/Four04'

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
      <Four04 />
    )
  }
}

export default NotFoundLayout
