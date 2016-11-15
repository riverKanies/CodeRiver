import React from 'react'
import { connect } from 'react-redux'
import styles from './styles'

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
    const { currentPage } = this.props

    const ClickMe = (currentPage - 1 < 0) ? <div /> : (
      <a onClick={this.prevPage} className={styles.nextLink}>
        <svg
          className={styles.arrow}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 40 40'
        >
          <title>Left Arrow</title>
          <path d='M3.22,21.13,13.49,31.4a1.6,1.6,0,1,0,
          2.27-2.27L8.23,21.6H35.65a1.6,1.6,
          0,0,0,0-3.21H8.23l7.53-7.53A1.6,1.6,0,0,0,
          13.49,8.6L3.22,18.87A1.6,1.6,0,0,0,3.22,21.13Z' />
        </svg>
      </a>
    )

    return <div className={styles.leftArrowContainer}>{ClickMe}</div>
  }

  renderNext () {
    const { currentPage, totalPages } = this.props

    const ClickMe = (currentPage + 1 >= totalPages) ? <div /> : (
      <a onClick={this.nextPage} className={styles.backLink}>
        <svg
          className={styles.arrow}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 40 40'
        >
          <title>Next Arrow</title>
          <path d='M36.78,18.87,26.51,8.6a1.6,1.6,0,0,0-2.27,2.27l7.53,
          7.53H4.35a1.6,1.6,0,0,0,0,3.21H31.77l-7.53,7.53a1.6,
          1.6,0,0,0,2.27,2.27L36.78,21.13A1.6,1.6,0,0,0,36.78,18.87Z' />
        </svg>
      </a>
    )

    return <div className={styles.rightArrowContainer}>{ClickMe}</div>
  }

  render () {
    if (this.props.totalPages <= 1) return null
    return (
      <div className={styles.paginate}>
        {this.renderPrev()}
        <p className={styles.number}>
          {this.props.currentPage + 1}
        </p>
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
