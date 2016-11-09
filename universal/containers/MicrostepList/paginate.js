import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import getFilteredMicrosteps from './selector'
import { updatePage } from 'modules/MicrostepsFilter'

type Props = {
  dispatch: Function,
  totalPages: number,
  currentPage: number
}

class Paginate extends React.Component {
  props: Props

  constructor (props) {
    super(props)

    this.updatePage = this.updatePage.bind(this)
  }

  updatePage (event) {
    const { dispatch } = this.props

    dispatch(updatePage(event.target.value))
  }

  render () {
    if (this.props.totalPages <= 1) return null

    return (
      <select onChange={this.updatePage}>
        {_.range(this.props.totalPages).map(i => <option value={i}>{i + 1}</option>)}
      </select>
    )
  }
}

const mapStateToProps = (state) => {
  const { totalPages, currentPage } = getFilteredMicrosteps(state)

  return {
    totalPages,
    currentPage
  }
}

export default connect(
  mapStateToProps,
)(Paginate)
