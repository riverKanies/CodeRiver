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
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  updatePage (event) {
    const { dispatch } = this.props

    dispatch(updatePage(event.target.value))
  }

  prevPage () {
    const { dispatch, currentPage } = this.props

    dispatch(updatePage(currentPage - 1))
  }

  nextPage () {
    const { dispatch, currentPage } = this.props

    dispatch(updatePage(currentPage + 1))
  }

  renderPrev () {
    const { currentPage, totalPages } = this.props

    if (currentPage - 1 < 0) return null

    return <a onClick={this.prevPage}> &lt;&lt; </a>
  }

  renderNext () {
    const { currentPage, totalPages } = this.props

    if (currentPage + 1 > totalPages) return null

    return <a onClick={this.nextPage}> &gt;&gt; </a>
  }

  render () {
    if (this.props.totalPages <= 1) return null
    return (
      <div>
        {this.renderPrev()}
        {this.props.currentPage}
        {this.renderNext()}
      </div>
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
