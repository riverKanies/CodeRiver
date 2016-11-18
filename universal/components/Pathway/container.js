import React from 'react'
import Pathway from './component'

type Props = {
  id: number
}

export default class PathwayContainer extends React.Component {
  props: Props
  state = {
    id: undefined
  }
  componentWillMount () {
    const { id } = this.props

    this.setState({ id })
  }

  render () {
    return (
      <Pathway />
    )
  }
}
